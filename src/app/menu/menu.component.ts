import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ItemService } from '../services/item.service';
import { Query } from '../models/query'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  faSearch = faSearch;
  query: Query;
  items = "";
  seller: string[];
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems("iphone").subscribe( (query) =>  {this.query = query; this.itemService.getSeller(this.query.results[1].seller.id).subscribe()} );
  }

}
