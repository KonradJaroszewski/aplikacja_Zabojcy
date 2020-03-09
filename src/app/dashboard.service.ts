import { Injectable } from '@angular/core';
import {config} from'./config';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import {widget} from './Model/widget';
import { Observable, of } from 'rxjs';
import {mapTo,switchMap,catchError,map} from 'rxjs/operators'; 
interface dasboardResposne{
  widgets: string;
}
@Injectable({
  providedIn: 'root'
})

export class DashboardService {
  
  widget : widget ;
  constructor(private http: HttpClient) { }
  
  public getWidget(userId:number): Observable<widget[]>{
    return this.http.get<dasboardResposne>(`${config.apiUrl}/api/dashboard/get/${userId}`).pipe(
      map(value =>JSON.parse(value.widgets)),
      catchError(error => {
        this.handleError(error);
        return of([]);
      })
    )
    }
    public saveWidget(userId:number, widgets: widget[]):Observable<boolean>{
      return this.http.post<string>(`${config.apiUrl}/add`,{userId,widgets:JSON.stringify(widgets)}).pipe(
        mapTo(true),
        catchError(error=>{
          this.handleError(error)
          return of (false)
        })
      )
    }
     private handleError(error: any){
       if(error instanceof HttpErrorResponse){
         alert(`${error.message}`);
       }else {
         alert(error);
       }
     }
    
  }

