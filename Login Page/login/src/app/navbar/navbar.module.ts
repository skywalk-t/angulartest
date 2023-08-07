import { NgModule } from '@angular/core';

// Components
import { NavbarComponent } from './navbar.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule 
    ],
  exports: [
    NavbarComponent
    ],
  providers: [ ],

})

export class NavbarModule { }