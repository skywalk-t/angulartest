import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Emp1Component } from './emp1/emp1.component';

const routes: Routes = [
 {path:'', component:Emp1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
