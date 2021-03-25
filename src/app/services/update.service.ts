import { Injectable, EventEmitter, Output } from '@angular/core';
import { Item } from '../models/item';
import { Query } from '../models/query';
import { ItemService } from './item.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  @Output() change: EventEmitter<Query> = new EventEmitter();
  items: Item[];
  query: Query;

  constructor(private itemService: ItemService) { }

  update(title: string){
    this.itemService.getItems(title, "0").subscribe((query) => {this.query = query; this.change.emit(this.query);});
  }
}
