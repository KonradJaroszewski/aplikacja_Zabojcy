import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {tap,mapTo,catchError} from 'rxjs/operators';
import {Tokens} from './../Model/Tokens';
import {config} from './../config';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
    private readonly ID='ID';
    private readonly LOGIN='LOGIN';
    private readonly NAME='NAME';
    private readonly LAST_NAME='LAST_NAME';
    private readonly USER_SESSION='USER_SESSION';


    constructor(private http:HttpClient){}

    logIn(user:{login :string,password:string}):Observable<boolean>{
        return this.http.post<any>(`${config.apiUrl}/api/user/login`, user)
        .pipe(
            tap(tokens=> this.storeTokens(tokens)),
            mapTo(true),
            catchError(error=>{
                alert(error.error);
                return of(false);
            })
        );
    }
    logout(){
        const loggedUser={
            id: localStorage.getItem(this.ID),
            login: localStorage.getItem(this.LOGIN)
        };
        return this.http.put<any>(`${config.apiUrl}/api/user/logout`, loggedUser)  
        .pipe(
            tap(()=> this.removeTokens()),
            mapTo(true),
            catchError(error=> {
                alert(error.error);
                return of(false);
            })
        );
      }
    getLogin(){
        return localStorage.getItem(this.LOGIN);
    }
    get UserSession(){
        return localStorage.getItem(this.USER_SESSION);
    }
    private storeTokens(tokens: Tokens){
        localStorage.setItem(this.ID,tokens.id.toString());
        localStorage.setItem(this.LOGIN, tokens.login);
        localStorage.setItem(this.NAME,tokens.name);
        localStorage.setItem(this.LAST_NAME, tokens.lastName);
        localStorage.setItem(this.USER_SESSION, tokens.userSession);
    }
    private removeTokens(){
        localStorage.removeItem(this.ID);
        localStorage.removeItem(this.LOGIN);
        localStorage.removeItem(this.NAME);
        localStorage.removeItem(this.LAST_NAME);
        localStorage.removeItem(this.USER_SESSION);
    }
    isLoggedIn(){
        return !! this.UserSession
    }


 

 
}



