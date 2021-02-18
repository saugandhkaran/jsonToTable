import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { FilterCategory } from '../../models/filterCategory.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input()
  filterHeaders: string[] = [];

  @Output()
  dataFiltered: EventEmitter<string> = new EventEmitter<string>();

  constructor(private _filterService: FilterService) { }

  filters = [];
  condition = {
    category: '',
    column: '',
    value: ''
  }
  filterConditions = [];
  filteredResultCount :number = 0;

  ngOnInit(): void {
    this.filters = this._filterService.getAllFilters();
  }

  addFilter() {
    const filterConditionObject: FilterCategory = {
      category: this.condition.category,
      column: this.condition.column,
      value: this.condition.value
    };
    this.filterConditions.push(filterConditionObject);
    this.resetValuesOfFilterObject();
    this.applyFilters();
  }

  resetValuesOfFilterObject() {
    Object.keys(this.condition).forEach((item) => this.condition[item] = '');
  }

  applyFilters() {
    this.filteredResultCount = this._filterService.filterResult(this.filterConditions);
    this.dataFiltered.emit('applied');
  }

  removeFilter(index) {
    this.filterConditions.splice(index);
    this.applyFilters();
  }
}
