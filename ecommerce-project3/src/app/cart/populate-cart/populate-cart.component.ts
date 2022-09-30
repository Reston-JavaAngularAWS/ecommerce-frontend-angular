import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../products/product.model';
import { ProductService } from '../../products/product.service';
import { CartService } from '../cart.service';
import { CartModel } from '../cart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-populate-cart',
  templateUrl: './populate-cart.component.html',
  styleUrls: ['./populate-cart.component.css']
})
export class PopulateCartComponent implements OnInit {
  allProducts: ProductModel[] = [];

  cart: CartModel = {
    orderNo: 0,
    userID: 0,
    orderDate: "",
    orderStatus: false,
    orderItems: [],
    allProducts: []
  }

  constructor(private productService: ProductService, 
              private router: Router,
              private cartService: CartService
              ) {}

  

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void{
    this.productService.getAllProducts().subscribe((response)=>{
      this.allProducts=response;
    }); 
  }
populateCart(sku: any, name: any, image: any, quantity: any, price: any) {
  // Getting User ID that is making the order
  let userInfo: any = sessionStorage.getItem("userinfo")
  let user = JSON.parse(userInfo)

  // Registering userID is cartID
  this.cart.userID = user.userID

  // Registering allProducts in CartID (supposedly)
  this.cart.allProducts[0] = { 
    productSku: sku,
    productName: name,
    productImage: image,
    productQuantity: quantity,
    productPrice: price
  }
  console.log(this.cart)
  this.cartService.addToCart(this.cart).subscribe((response)=>{
  sessionStorage.setItem("productinfo", JSON.stringify(response))
  this.router.navigate(["app-cart"])
})
}

}