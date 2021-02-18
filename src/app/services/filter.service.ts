import { Injectable } from '@angular/core';
import { DatastoreService } from './datastore.service';
import { FilterCategory } from '../models/filterCategory.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private _datastoreService: DatastoreService) { }
  filters :string[] = ['contains', 'equals', 'notEquals', 'lessThan', 'greaterThan'];

  getAllFilters() :string[] {
    return this.filters;
  }

  filterResult(filterConditions) :number {
    let data: Product[] = this._datastoreService.getJsonData();
    if (filterConditions.length) {
      filterConditions.forEach((condition : FilterCategory) => {
        if (condition.category === 'equals') {
          data = data.filter((item: Product) => item[condition.column] == condition.value);
        }
        if (condition.category === 'contains') {
          data = data.filter((item: Product) => (item[condition.column]).toLowerCase().includes((condition.value).toLowerCase()));
        }
        if (condition.category === 'notEquals') {
          data = data.filter((item: Product) => item[condition.column] != condition.value);
        }
        if (condition.category === 'lessThan') {
          data = data.filter((item: Product) => item[condition.column] < condition.value);
        }
        if (condition.category === 'greaterThan') {
          data = data.filter((item: Product) => item[condition.column] > condition.value);
        }
      })
      this._datastoreService.setCopyJsonData(data);
    }
    return data.length;
  }
}
