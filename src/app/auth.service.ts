import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  link = '';


  constructor(private http: HttpClient, private router: Router) { }

  isLoggedInBool: any;
  login(loginData: any): Observable<any>{
    this.link = 'http://127.0.0.1:8000/api/login_check';
    return this.http.post<any[]>(this.link, loginData);
  }
/*
  loginChangeStatus(): any{
    this.isLogin = !this.isLogin;
  }

  loginStatus(): any{
    return this.isLogin;
  }*/

  setTokenInStorage(data: any) {
    sessionStorage.setItem('token', data);
  }

  getTokenInStorage(): any {
    return sessionStorage.getItem('token');
  }

  setUsernameInStorage(data: any): any{
    sessionStorage.setItem('username', data);
  }

  getUsernameInStorage(): any {
    return sessionStorage.getItem('username');
  }

  loggedIn(): Observable<boolean>{
    if ( !!sessionStorage.getItem('token')){
      this.isLoggedInBool = true;
    } else {
      this.isLoggedInBool = false;
    }
    return of(this.isLoggedInBool);
  }

logout(): any {
sessionStorage.removeItem('token');
sessionStorage.removeItem('username');
this.router.navigate(['/home']);

}


}
