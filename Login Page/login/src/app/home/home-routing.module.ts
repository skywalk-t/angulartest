import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomechildoneComponent } from './homechildone/homechildone.component';
import { HomechildtwoComponent } from './homechildtwo/homechildtwo.component';

const routes: Routes = [
  { path: "", component: HomeComponent ,children:[
      {path:'homechildone',component :HomechildoneComponent},
      {path:'homechildtwo',component :HomechildtwoComponent},
      {path:'', redirectTo:'homechildone', pathMatch:'full'},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
