import { Injectable } from "@angular/core";
import { ProductModel } from "./product.model"
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from "../cart/cart.service";
import { CartModel } from "../cart/cart.model";

@Injectable({
    providedIn: 'root'
})
export class ProductService{
   
baseProductsUrl: string = "http://localhost:8080/api/product/getall";

baseOrdersUrl: string = "http://localhost8080/api/orders";

constructor(private httpClient: HttpClient, 
            private cs: CartService,
            private activateRoute: ActivatedRoute,
            private router: Router
            ){}

getAllProducts(): Observable<ProductModel[]>{
    return this.httpClient.get<ProductModel[]>(this.baseProductsUrl);
}

// addToCart(productSku: number){
//     if(this.activateRoute.snapshot.paramMap.get("userid") != null){
//         let userID: any = this.activateRoute.snapshot.paramMap.get("userid");
//         if(this.allProducts[productSku-1].productQuantity>=1){
//           this.allProducts[productSku-1].productQuantity--;
//           this.httpClient.delete<void>(this.baseProductsUrl+ "/" + productSku);
          
//           //this.httpClient.put<>(this.baseOrdersUrl, productSku);
        
//         }
//       }else{
//         this.router.navigate(["login"]);
//       }
// }


}

