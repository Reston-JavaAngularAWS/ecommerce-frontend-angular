import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { PopulateCartComponent } from './cart/populate-cart/populate-cart.component';
import { OrderHistoryComponent } from './orders/order-history/order-history.component';
import { ProductsComponent } from './products/display-products/display-products.component';
import { ProfileComponent } from './user-profile/profile/profile.component';
import { RegisterComponent } from './users/register/register.component';
import { UserComponent } from './users/user/user.component';

const routes: Routes = [
  {
    path: "display-products",
    component: ProductsComponent
  },
  {
    path: "app-user",
    component: UserComponent
  },
  {
    path: "register-user",
    component: RegisterComponent
  },
  {
    path: "app-populate-cart",
    component: PopulateCartComponent
  },
  {
    path: "app-profile",
    component: ProfileComponent
  },
  {
    path: "app-cart",
    component: CartComponent
  },
  {
    path: "app-order-history",
    component: OrderHistoryComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
