import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { FormModuleRoutingModule } from './form-routing.module';



@NgModule({
  declarations: [
    AddComponent
  ],
  imports: [
    CommonModule,FormModuleRoutingModule
  ]
})
export class FormModule { }
