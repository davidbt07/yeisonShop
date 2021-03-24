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
  description: Description;
  

  constructor(private itemService: ItemService,
    private lotation: Location,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.itemService.getItem(id).subscribe((item) => { this.item = item; this.item.description = this.description; this.itemService.getDescriptionItem(id).subscribe((description) => { this.item.description = description; console.log(this.item.description.plain_text); }); });
    this.itemService.getDescriptionItem(id).subscribe((description) => { this.item.description = description; console.log(this.item.description.plain_text); });
    
  }

}
