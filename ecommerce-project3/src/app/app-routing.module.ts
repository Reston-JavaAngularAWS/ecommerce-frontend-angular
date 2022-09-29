import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/display-products/display-products.component';
import { ProfileComponent } from './user-profile/profile/profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
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
    path: "app-user-profile",
    component: UserProfileComponent
  },
  {
    path: "app-profile",
    component: ProfileComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
