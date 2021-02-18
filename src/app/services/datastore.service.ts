import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {
  jsonData: Product[] = [];
  modifiedData: Product[] = [];
  tableHeaders :string[] = [];
  constructor() { }

  setJsonData(data: Product[]) {
    this.jsonData = data;
    this.modifiedData = this.jsonData;
  }

  getJsonData(): Product[] {
    return this.jsonData;
  }

  setCopyJsonData(data: Product[]): void {
    this.modifiedData = data;
  }

  setTableHeaders(data: string[]): void {
    this.tableHeaders = data;
  }

  getTableHeaders() {
    return this.tableHeaders;
  }

  getTableData(offset: number, amount: number) {
    return this.modifiedData.slice(0, ((offset * amount + amount)));
  }

  sortData(column: string) {
    this.modifiedData.sort((a, b) => {
      if (a[column] < b[column]) { return -1; }
      if (a[column] > b[column]) { return 1; }
      return 0;
    });
    return this.getTableData(0, 30);
  }
}
