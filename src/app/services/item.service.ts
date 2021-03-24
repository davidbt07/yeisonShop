import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Query } from '../models/query';
import { Item } from  '../models/item'
import { Seller } from '../models/seller'
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Description } from '../models/description';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  urlItems:string = "https://api.mercadolibre.com/sites/MCO/";
  urlItem: string = "https://api.mercadolibre.com/items/";

  constructor(private http: HttpClient) { }

  getItems(title:string, offset: string): Observable<Query>{
    let address = this.urlItems + "search?paging&limit=50&q=" + title + "&offset=" + offset +"#json";  
    return this.http.get<Query>(address);
  }

  getItem(id: string):Observable<Item>{
    let addressItem = this.urlItem + id;
    return this.http.get<Item>(addressItem); 
  }

  getDescriptionItem(id: string): Observable<Description>{
    let addressDescription = this.urlItem + id + "/description";
    return this.http.get<Description>(addressDescription);
  }

  getSeller(id:string): Observable<Seller>{
    let address = "https://api.mercadolibre.com/users/" + id;
    return this.http.get<Seller>(address);
  }
}
