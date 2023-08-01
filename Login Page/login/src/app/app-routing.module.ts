import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Log1Module } from './login/log1/log1.module';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'login', loadChildren: () => import('./log1/log1.module').then(m => m.Log1Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
