import { Component, OnInit } from '@angular/core';
import {Donut} from "../../model/donut";
import {DonutService} from "../../services/donut.service";

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {


  donuts: Donut[] = [];
  constructor(private donutService: DonutService) { }

  ngOnInit(): void {
    this.donutService.getDonuts().subscribe(resp => {
      this.donuts = resp.results;
      console.log('donuts are ', this.donuts);
    });
  }


}
