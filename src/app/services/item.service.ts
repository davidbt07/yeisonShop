import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Query } from '../models/query';
import { Seller } from '../models/seller'
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url:string = "https://api.mercadolibre.com/sites/MCO/";

  constructor(private http: HttpClient) { }

  getItems(title:string): Observable<Query>{
    let address = this.url + "search?q=" + title;
    return this.http.get<Query>(address);
  }

  getSeller(id:string): Observable<Seller>{
    let address = "https://api.mercadolibre.com/users/" + id;
    return this.http.get<Seller>(address)
  }
}
