import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/users/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userModel: UserModel =
  {
    userID: 0,
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: "",
    usertype: ""
  }

  constructor() { }

  ngOnInit(): void {

    let userInfo: any = sessionStorage.getItem("userinfo")
    this.userModel = JSON.parse(userInfo)
  }

}
