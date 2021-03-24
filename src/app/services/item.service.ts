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

  getItems(title:string): Observable<Query>{
    let address = this.urlItems + "search?q=" + title + "&paging&offset=6&limit=20#json";  
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

  /*getSellers(title):Observable<Seller[]>{
    let address = "https://api.mercadolibre.com/users/";
    let users = this.getItems(title);
    return this.http.get<Seller[]>();

    https://api.mercadolibre.com/sites/MCO/search?q=iphone&paging&offset=50#json
  }*/

  getSeller(id:string): Observable<Seller>{
    let address = "https://api.mercadolibre.com/users/" + id;
    return this.http.get<Seller>(address);
  }
}
