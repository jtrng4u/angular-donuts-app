import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DonutsComponent} from "./components/donuts/donuts.component";
import {CartComponent} from "./components/cart/cart.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {DonutComponent} from "./components/donut/donut.component";

const routes: Routes = [
  {path:'donuts', component: DonutsComponent},
  {path:'cart', component: CartComponent},
  {path:'donutDetail/:id', component: DonutComponent},
  {path:'', redirectTo: '/donuts', pathMatch: 'full'},
  {path:'**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
