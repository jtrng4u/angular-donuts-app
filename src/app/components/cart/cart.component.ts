import { Component, OnInit } from '@angular/core';
import {DonutService} from "../../services/donut.service";
import {Donut} from "../../model/donut";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private donutService: DonutService) { }
  donuts: Donut[] = [];
  ngOnInit(): void {
    this.donuts = this.donutService.getCart();
  }

  totalPrice(): number {
    let sum:number = 0;
    this.donuts.forEach(donut => sum += 1);
    return sum;
  }

  totalCalories(): number {
    let sum:number = 0;
    this.donuts.forEach(donut => sum += donut.calories);
    return sum;
  }
}
