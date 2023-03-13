import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomerType } from '../interfaces/b18-customertype';

@Injectable({
  providedIn: 'root'
})
export class B18CustomergroupService {
  private _url:string="../assets/data/customers.json";
  constructor(private _http: HttpClient) { }
  getCustomer(): Observable<ICustomerType[]>{
    return this._http.get<ICustomerType[]>(this._url)
  }
}
