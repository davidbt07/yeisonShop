import { Component, ElementRef, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ItemService } from '../services/item.service';
import { Query } from '../models/query';
import { Item } from '../models/item';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  faSearch = faSearch;
  query: Query;
  items: Item[];
  seller: string[];

  @ViewChild("MatPaginator") paginator: MatPaginator;
  obs: Observable<any>;
  dataSource: MatTableDataSource<Item>;

  constructor(private itemService: ItemService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.itemService.getItems("iphone").subscribe( (query) =>  {this.query = query; this.items = this.query.results; this.changeDetectorRef.detectChanges(); ; this.dataSource = new MatTableDataSource<Item>(this.items); this.dataSource.paginator = this.paginator; this.obs = this.dataSource.connect();} );
  }

  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }

}
