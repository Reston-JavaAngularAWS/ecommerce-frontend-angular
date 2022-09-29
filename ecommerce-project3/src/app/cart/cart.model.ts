import { orderItem } from "../orderItems/orderItem.model";
export interface Cart{
    orderNo: number;
    userID: number;
    orderDate: string;
    orderStatus: string;
    orderItems: orderItem[];
}