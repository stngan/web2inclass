import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/m2-b15-product-httpservice';

@Injectable({
  providedIn: 'root'
})
export class M2B15ProductHttpserviceService {

  private _url:string="../assets/data/products.json";
  constructor(private _http: HttpClient) { }

  getProducts():Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this._url)
    }
}
