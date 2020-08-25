import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {config} from './config';
import {catchError, mapTo} from 'rxjs/operators';
import {debtors} from './Model/debtors';

@Injectable({
  providedIn: 'root'
})
export class DebtorsService {

  constructor(private http: HttpClient) { }

getDebtors(): Observable<debtors[]> {
  return this.http.get<debtors[]>(`${config.apiUrl}/debtors/list`);

}
public addDebtor(debtor: debtors): Observable<boolean> {
    return this.http.post<string>(`${config.apiUrl}/debtors/add`, debtor).pipe(
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false);
      })
    );
}
public updateDebtor(id: number, debtor: debtors): Observable<boolean> {
    return this.http.put<string>(`${config.apiUrl}/debtors/edit/${id}`, debtor).pipe(
      mapTo(true),
        catchError( error => {
          alert(error.error);
          return of(false);
        }));
}
public deleteDebtor(id: number ): Observable<boolean> {
    return this.http.delete<string>(`${config.apiUrl}/debtors/remove/${id}`).pipe(
      mapTo(true),
      catchError(error => {
        alert (error.error);
        return of(false);
      })
    );
}
public cancelTask(id: number): Observable<boolean> {
    return this.http.delete<string>(`${config.apiUrl}/debtors/cancel-task/${id}` ).pipe(
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false);
      })
    );
}
}
