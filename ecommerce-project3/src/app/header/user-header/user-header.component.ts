import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/users/auth.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.isLoggedIn = false;
    this.router.navigate(["app-user"])
  }

  display(){
    this.router.navigate(["app-populate-cart"])
  }

  profile(){
    this.router.navigate(["app-profile"])
  }

  history(){
    this.router.navigate(["app-order-history"])
  }

  cart(){
    this.router.navigate(["app-cart"])
  }

}
