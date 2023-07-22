import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Emp1Component } from './emp1/emp1.component';
import { EmployeeRoutingModule } from './employee-routing.module';



@NgModule({
  declarations: [
    Emp1Component
  ],
  imports: [
    CommonModule,EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
