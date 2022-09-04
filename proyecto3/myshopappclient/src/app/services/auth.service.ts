import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import {  UserResponse } from '../interfaz/user';
import { JwtHelperService } from "@auth0/angular-jwt";

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private loggedId = new BehaviorSubject<boolean>(false);

  get isLogged(): Observable<boolean> {
    return this.loggedId.asObservable()
  }



  URL_SERVER = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}
  
  login(data: FormGroup): Observable<UserResponse | void> {
    return this.http.post<UserResponse>(`${this.URL_SERVER}/login`, data)
    .pipe(
      map((res: UserResponse) => {
        this.saveToken(res.token)
        this.loggedId.next(true);
        return res
      }),
      catchError( (err) => this.handleError(err))
    )
  }

  register(data: FormGroup) {
    return this.http.post(`${this.URL_SERVER}/register`, data)
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loggedId.next(false);

  }

  private checkToken(): void {
    const userToken: any = localStorage?.getItem('token')
    const isExpired = helper.isTokenExpired(userToken);
    isExpired ? this.logout : this.loggedId.next(true)
  }

  private saveToken(token: string): void {
    localStorage.setItem('token', token)
  }

  private handleError(err: any): Observable<any> {
    let errorMessage = 'Ocurrio un Error'
    if(errorMessage) {
      errorMessage = `Error: code ${err.message}`
    }
    return throwError(err)
  }
}
