import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { UserModel } from 'src/app/users/user.model';
import { CartModel } from 'src/app/cart/cart.model';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  previousOrders: CartModel[] = [];


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

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.loadHistory();

  }

  loadHistory(): void {
    let userInfo: any = sessionStorage.getItem("userinfo")
    this.userModel = JSON.parse(userInfo)

    this.cartService.getHistory(this.userModel.userID).subscribe((response)=>{
      this.previousOrders = response;
    });
  }

}
