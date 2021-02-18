import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { DatastoreService } from '../../services/datastore.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  constructor(private _datastoreService: DatastoreService) { }
  @Input() jsonData: Product[] = [];
  @Input() tableHeaders: string[];

  sortColumn(category: string) :void{
    this._datastoreService.getTableData(0, 30);
    this.jsonData = this._datastoreService.sortData(category);
  }
}
