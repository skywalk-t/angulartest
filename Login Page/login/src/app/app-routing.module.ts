import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './home/test/test.component';
import { HomechildoneComponent } from './home/homechildone/homechildone.component';
import { HomechildtwoComponent } from './home/homechildtwo/homechildtwo.component';

const routes: Routes = [
  {path:'home',loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    //NB : This coulud be shit into Home modules. bcos its a part of home
    // children:[
    //   {path:'homechildone',component :HomechildoneComponent},
    //   {path:'homechildtwo',component :HomechildtwoComponent},
    //   {path:'', redirectTo:'homechildone', pathMatch:'full'},
    // ]
  },
  {path:'homechildone',component :HomechildoneComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register1',loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)},

  // {path:'login', loadChildren: () => import('./log1/log1.module').then(m => m.Log1Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
