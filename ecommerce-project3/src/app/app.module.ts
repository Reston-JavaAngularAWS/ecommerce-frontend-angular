import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './users/user/user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/display-products/display-products.component';
import { CartComponent } from './cart/cart/cart.component';
import { RegisterComponent } from './users/register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserHeaderComponent } from './header/user-header/user-header.component';
import { ProfileComponent } from './user-profile/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,

    UserComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    RegisterComponent,
    UserProfileComponent,
    UserHeaderComponent,
    ProfileComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
