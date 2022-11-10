import { Component, OnInit } from '@angular/core';
import {Donut} from "../../model/donut";
import {DonutService} from "../../services/donut.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {

  donut: Donut = {} as Donut;
  constructor(private donutService: DonutService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let params = this.route.snapshot.paramMap;
    let id: number = Number(params.get("id"));
    this.donutService.getDonut(id).subscribe(donut => this.donut = donut);
  }

  addToCart(donut: Donut) {
    this.donutService.addToCart(donut);
    this.router.navigate(['/cart']);
  }
}
