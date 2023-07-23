import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormModule } from './form/form.module';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'Home', component:HomeComponent},
  {path:'',redirectTo:'app', pathMatch: 'full'},
  {path:'add',loadChildren: ()=>import('./form/form.module').then(m=> m.FormModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
