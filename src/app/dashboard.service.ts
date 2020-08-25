import { Injectable } from '@angular/core';
import {config} from './config';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {widget} from './Model/widget';
import { Observable, of } from 'rxjs';
import {mapTo, catchError, map} from 'rxjs/operators';
interface DashboardResponse {
  widgets: string;
}
@Injectable({
  providedIn: 'root'
})

export class DashboardService {


  constructor(private http: HttpClient) { }

  public getWidget(userId: number): Observable<widget[]> {
    return this.http.get<DashboardResponse>(`${config.apiUrl}/dashboard/get/${userId}`).pipe(
      map(value => JSON.parse(value.widgets)),
      catchError(error => {
        alert(error.error);
        return of([]);
      })
    );
    }
    public saveWidget(userId: number, widgets: widget[]): Observable<boolean> {
      return this.http.post<string>(`${config.apiUrl}/dashboard/add`, {userId, widgets: JSON.stringify(widgets)}).pipe(
        mapTo(true),
        catchError(error => {
          alert(error.error)
          return of (false);
        })
      );
    }
     /*private handleError(error: any) {
       if (error instanceof HttpErrorResponse) {
         alert(`${error.message}`);
       } else {
         alert(error);
       }
     }*/

  }

