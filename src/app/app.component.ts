import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from './models/product.model';
import { ApiService } from './services/api.service';
import { DatastoreService } from './services/datastore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'productsup';
  jsonData: Product[] = [];
  tableHeaders: string[];
  counter = 0;
  subscription: Subscription;

  constructor(private _apiService: ApiService, private _datastoreService: DatastoreService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this._apiService.getListOfProducts().subscribe((data) => {
      const subscribedData = Object.keys(data).map((item) => data[item]);
      const tableHeaders = Object.keys(subscribedData[0]).map(item => item).sort();
      this._datastoreService.setJsonData(subscribedData);
      this._datastoreService.setTableHeaders(tableHeaders)
      this.tableHeaders = tableHeaders;
      this.jsonData = this._datastoreService.getTableData(0, 30);
    }); 
  }

  getFilteredResults() {
    this.counter = 0;
    this.jsonData = this._datastoreService.getTableData(0, 30);
  }

  onScroll() {
    this.counter++;
    if (this.counter >= 1) {
    let newData: Product[] = this._datastoreService.getTableData(this.counter, 30);
      this.jsonData = newData;
    }
  }
}
