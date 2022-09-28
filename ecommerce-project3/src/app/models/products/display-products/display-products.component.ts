import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts: Product[] = [];

  constructor(private httpClient: HttpClient, 
              private ps: ProductService, 
              private AR: ActivatedRoute,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void{
    this.ps.getAllProducts().subscribe((response)=>{
      console.log(response);
      this.allProducts=response;
    });
  }

  addToCart(productSku: number): void{
    this.ps.addToCart(productSku);
    
}
}