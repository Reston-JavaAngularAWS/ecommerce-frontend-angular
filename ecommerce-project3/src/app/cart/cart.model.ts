import { ProductModel } from "../products/product.model";
import { orderItemModel } from "../orderItems/orderItem.model";
export interface CartModel{
    orderNo: number;
    userID: number;
    orderDate: string;
    orderStatus: Boolean;
    orderItems: orderItemModel[];
    allProducts: ProductModel[];
}