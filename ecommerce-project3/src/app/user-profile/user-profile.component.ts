import { Component, OnInit } from '@angular/core';

import { ProductModel } from '../products/product.model';
import { ProductService } from '../products/product.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  allProducts: ProductModel[] = [];

  constructor(private httpClient: HttpClient, 
              private productService: ProductService, 
              private AR: ActivatedRoute,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void{
    this.productService.getAllProducts().subscribe((response)=>{
      console.log(response);
      this.allProducts=response;
    });
  }

  addToCart(productSku: number): void{
    this.productService.addToCart(productSku);  
    this.router.navigate(["app-cart"])
}

}