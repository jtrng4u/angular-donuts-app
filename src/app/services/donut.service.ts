import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Donut} from "../model/donut";

@Injectable({
  providedIn: 'root'
})
export class DonutService {


  url: string = 'https://grandcircusco.github.io/demo-apis/donuts';
  cartItems: Donut[] = [];

  constructor(private httpClient: HttpClient) { }

  getDonuts(): Observable<any> {
    let donutsURl = this.url + ".json";
    console.log(donutsURl);
    return this.httpClient.get<any>(donutsURl);
  }

  getDonut(id: number): Observable<Donut> {
    let donutURl = this.url + "/" + id + ".json";
    console.log(donutURl);
    return this.httpClient.get<Donut>(donutURl)
  }

  addToCart(donut: Donut): void {
    this.cartItems.push(donut);
  }

  getCart(): Donut[] {
    return this.cartItems;
  }
}
