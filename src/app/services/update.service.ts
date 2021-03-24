import { Injectable, EventEmitter, Output } from '@angular/core';
import { Item } from '../models/item';
import { ItemService } from './item.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  @Output() change: EventEmitter<Item[]> = new EventEmitter();
  items: Item[];

  constructor(private itemService: ItemService) { }

  update(title: string){
    this.itemService.getItems(title, "0").subscribe((items) => {this.items = items.results; this.change.emit(this.items);});
  }
}
