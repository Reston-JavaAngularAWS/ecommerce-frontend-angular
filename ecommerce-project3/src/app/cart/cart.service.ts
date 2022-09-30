import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CartModel } from "./cart.model";



@Injectable({
    providedIn: 'root'
})
export class CartService{

    createOrderUrl: string = "http://localhost:8080/api/orders/update";

    baseOrdersUrl: string = "http://localhost:8080/api/orders"

    checkOutOrderUrl: string = "http://localhost:8080/api/orders/checkout/"

    constructor(private httpClient: HttpClient
                ) {}


    addToCart(cart: CartModel): Observable<CartModel>{
        console.log(cart)
        return this.httpClient.put<CartModel>(this.createOrderUrl, cart);
    }

    checkout(cart: CartModel): Observable<CartModel>{
        return this.httpClient.put<CartModel>(this.checkOutOrderUrl, cart);
    }

    getHistory(userID: number): Observable<CartModel[]>{
        return this.httpClient.get<CartModel[]>(this.baseOrdersUrl+"/"+userID)
    }

}