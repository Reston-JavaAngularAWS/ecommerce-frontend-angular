import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartModel } from './cart.model';
import { CartService } from './cart.service';

@Component({ 
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  orderItem: CartModel = {
    orderNo: 0,
    userID: 0,
    orderDate: "",
    orderStatus: false,
    orderItems: [],
    allProducts: []
  }

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {

    let productInfo: any = sessionStorage.getItem("productinfo")
    this.orderItem = JSON.parse(productInfo)
    
  }

  checkOut(userID: number){
    this.cartService.checkout(this.orderItem).subscribe((response)=>{
      this.router.navigate(["app-populate-cart"])
      this.orderItem = {
        orderNo: 0,
        userID: 0,
        orderDate: "",
        orderStatus: false,
        orderItems: [],
        allProducts: []
      }
    })
  }
  
  
}
