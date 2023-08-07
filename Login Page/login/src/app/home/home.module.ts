import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomechildtwoComponent } from './homechildtwo/homechildtwo.component';
import { HomechildoneComponent } from './homechildone/homechildone.component';
import { RouterModule } from '@angular/router';
import { NavbarModule } from '../navbar/navbar.module';


@NgModule({
  declarations: [
    HomeComponent, // Add corresponding components into corresponding modules Make sure that it is removed from appModule
    HomechildoneComponent,
    HomechildtwoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule ,
  ]
})
export class HomeModule { }
