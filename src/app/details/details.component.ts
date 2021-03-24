import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ItemService } from '../services/item.service';
import { Item } from '../models/item';
import { Description } from '../models/description';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  item: Item;
  description: Description = null;
  
  

  constructor(private itemService: ItemService,
    private location: Location,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.itemService.getItem(id).subscribe((item) => { this.item = item; this.itemService.getDescriptionItem(id).subscribe((description) => { this.item.description = description;}); });
  }

}
