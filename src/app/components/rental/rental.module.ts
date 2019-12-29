import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { NgPipesModule } from "ngx-pipes";
import { MapModule } from '../common/map/map.module';

import { RentalService } from 'src/app/shared/services/rental.service';

import { RentalComponent } from './rental.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';

import { UpperCasePipe } from "../common/pipes/uppercas.pipe";
import { CapitalizePipe } from "../common/pipes/capitalize.pipe";

const routes: Routes = [
  {path:'rentals', component: RentalComponent, children:[
    {path:'', component:RentalListComponent},
    {path:':rentalId', component:RentalDetailComponent}
  ]}
];

@NgModule({
declarations:[
  RentalComponent,
  RentalListComponent,
  RentalListItemComponent,
  RentalDetailComponent,
  UpperCasePipe,
  CapitalizePipe
],
imports:[CommonModule,HttpClientModule, RouterModule.forChild(routes), NgPipesModule, MapModule],
providers:[RentalService]
})

export class RentalModule{}