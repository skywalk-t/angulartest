import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormModule } from './form/form.module';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'Home', component:AppComponent},
  {path:'',redirectTo:'app', pathMatch: 'full'},
  {path:'add',loadChildren: ()=>import('./form/form.module').then(m=> m.FormModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
