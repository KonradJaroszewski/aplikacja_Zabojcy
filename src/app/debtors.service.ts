import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {config} from './config';

@Injectable({
  providedIn: 'root'
})
export class DebtorsService {

  constructor(private http: HttpClient) { }

getDebtors():Observable<any>{
  return this.http.get(`${config.apiUrl}/api/debtors/list`)
  
}
}