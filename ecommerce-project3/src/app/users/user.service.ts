import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient,
    private router: Router) { }

  baseUserUrl: string = "http://localhost:8080/api/user/login";

  registerUserUrl: string = "http://localhost:8080/api/user/register";


  
  // Login
  login(getUser: UserModel): Observable<UserModel> {
    return this.httpClient.put<UserModel>(this.baseUserUrl, getUser)
  }

  // Register User
  register(newUser: UserModel): Observable<UserModel>{
    return this.httpClient.post<UserModel>(this.registerUserUrl, newUser);
  }

}
