import { Component, OnInit, ViewChild, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Form } from '../models/form';
import { ItemService } from '../services/item.service';
import { Query } from '../models/query';
import { Item } from '../models/item';
import { UpdateService } from '../services/update.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() items: Item[];
  
  searchForm: FormGroup;
  feedbackCopy: Form;
  feedback: Form;
  title:string;

  query:Query;

  constructor(private fb: FormBuilder, private itemService: ItemService, private update: UpdateService) {
    this.createForm();
   }

   ngOnInit(): void {
  }
  
   createForm(){
    this.searchForm = this.fb.group({
      title:['', []]
    });
  }

  onSubmit(){
    this.title = this.searchForm.value.title;
    this.update.update(this.title);
    this.searchForm.reset({
      title:''
    });
  }
}
