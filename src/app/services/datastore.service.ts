import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {
  jsonData = [];
  modifiedData = [];
  tableHeaders :string[] = [];
  constructor() { }

  getAllProductList() {
    
  }

  setJsonData(data) {
    this.jsonData = data;
    this.modifiedData = this.jsonData;
  }

  getJsonData() {
    return this.jsonData;
  }

  setCopyJsonData(data) {
    this.modifiedData = data;
  }

  setTableHeaders(data) {
    this.tableHeaders = data;
  }

  getTableHeaders() {
    return this.tableHeaders;
  }

  getTableData(offset, amount) {
    return this.modifiedData.slice(0, ((offset * amount + amount)));
  }

  sortData(column) {
    this.modifiedData.sort((a, b) => {
      if (a[column] < b[column]) { return -1; }
      if (a[column] > b[column]) { return 1; }
      return 0;
    });
    return this.getTableData(0, 30);
  }
}
