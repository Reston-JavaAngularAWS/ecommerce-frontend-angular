import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product.service';
import { ProductModel } from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/users/auth.service';

@Component({
  selector: 'display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts: ProductModel[] = [];

  constructor(private httpClient: HttpClient, 
              private productService: ProductService, 
              private AR: ActivatedRoute,
              private router: Router,
              private authService: AuthService
              ) { }

  ngOnInit(): void {
    this.loadProducts();
    
  }

  login(){
    this.authService.isLoggedIn = false;
    this.router.navigate(["app-user"])
  }

  loadProducts(): void{
    this.productService.getAllProducts().subscribe((response)=>{
      console.log(response);
      this.allProducts=response;
    });
  }

}