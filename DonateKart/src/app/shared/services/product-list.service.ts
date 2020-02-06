import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  private jsonURL = 'assets/Products.json';

  constructor(private http: HttpClient) { }

  public getProductsList(): Observable<Product> {

    return this.http.get<Product>(this.jsonURL);

  }

  public getCurrency() {
    return this.http.get('https://api.exchangeratesapi.io/latest?base=USD');
  }
}
