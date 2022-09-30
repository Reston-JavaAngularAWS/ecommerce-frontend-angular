import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserModel } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
// property which will display 'Invalid username/password' if login fails
  errorMessage: string = "";
// this user will be 2 way property bount to the template
  user: UserModel = {
    userID: 0,
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: "",
    usertype: ""
  }
  constructor(private userService: UserService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  register(){
    this.router.navigate(["register-user"])
  }

  

  login(): void{
   this.userService.login(this.user).subscribe((response)=>{
    if(response.userID != 0){
        this.authService.isLoggedIn = true;
        sessionStorage.setItem("userinfo", JSON.stringify(response))
        this.router.navigate(["app-populate-cart"]);
      }else{
        this.errorMessage = 'Invalid username/password';
  
      }
    });
    
  }
}
