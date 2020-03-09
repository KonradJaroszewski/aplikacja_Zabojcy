import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import { Observable } from 'rxjs';
import {config} from'./config';
@Injectable({
  providedIn: 'root'
})
export class KillersService {

  constructor(private http: HttpClient) { }
  
  public getKillers(): Observable<any>{ 
    return this.http.get(`${config.apiUrl}/api/killers/list`);
  }
}
