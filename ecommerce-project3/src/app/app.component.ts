import { Component } from '@angular/core';
import { AuthService } from './users/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce-project3';

  constructor(private authService: AuthService){

  }

  retrieveIsUserLoggedIn(): boolean{
    return this.authService.isLoggedIn;
  }
}


