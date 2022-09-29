import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product.service';
import { ProductModel } from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';

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
    
}
}