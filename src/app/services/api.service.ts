import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //can be moved to a constant in config and assigned here when used
  configUrl = 'assets/data/table_data.json';

  constructor(private http: HttpClient) { }
  
  getListOfProducts() : Observable<Product>{
    return this.http.get<Product>(this.configUrl);
  }
}
