import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'register-user',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser: UserModel = {
    userID: 0,
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: "",
    usertype: ""
  }


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  loadLogin(): void {
    this.router.navigate(["app-user"]);
  }

  addUser(): void{
    this.userService.register(this.newUser).subscribe((response)=>{
      console.log(response);
      this.loadLogin();
    })
  }

}
