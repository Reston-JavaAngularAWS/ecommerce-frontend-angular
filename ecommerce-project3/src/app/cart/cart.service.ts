import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cart } from "./cart.model";


@Injectable({
    providedIn: 'root'
})
export class CartService{

    baseOrdersUrl: string = "http://localhost8080/api/orders";

    constructor(private httpClient: HttpClient
                ) {}

    getCart(userID: number): Observable<Cart>{
        return this.httpClient.get<Cart>(this.baseOrdersUrl);
    }


}