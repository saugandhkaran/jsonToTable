import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  configUrl = 'assets/data/table_data.json';
  constructor(private http: HttpClient) { }
  
  getListOfProducts() {
    return this.http.get<Product>(this.configUrl);
  }
}
