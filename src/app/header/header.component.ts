import { Component, OnInit, ViewChild, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Form } from '../models/form';
import { ItemService } from '../services/item.service';
import { Query } from '../models/query';
import { Item } from '../models/item';
import { MenuComponent } from '../menu/menu.component'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() items: Item[];
  @Input() menuComponent: MenuComponent;

  searchForm: FormGroup;
  feedbackCopy: Form;
  feedback: Form;
  title:string;

  query:Query;

  constructor(private fb: FormBuilder, private itemService: ItemService) {
    this.createForm();
   }

   ngOnInit(): void {
  }
  
   createForm(){
    this.searchForm = this.fb.group({
      title:['', []]
    });

    this.searchForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any){
    if(!this.searchForm) {
      return;
    }
  }

  onSubmit(){
    this.feedbackCopy = this.searchForm.value;
    this.title = this.searchForm.value.title;
    console.log("Este es el submit: ", this.title);
    this.menuComponent.search();
    this.itemService.getItems(this.title, "0").subscribe( (query) =>  {this.query = query; this.items = this.query.results; console.log(this.items);} );
    this.searchForm.reset({
      title:''
    });
  }
}
