import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { ProductModel } from '../products/product.model';

@Component({ 
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  baseOrdersUrl: string = "http://localhost8080/api/orders";

  product: ProductModel[] = [];

  constructor(private httpClient: HttpClient,
              private CS: CartService,          
    ) { }

  ngOnInit(): void {
    
  }

  loadItems(userID: number): void{
    this.CS
  }

}
