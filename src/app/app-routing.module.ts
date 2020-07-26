import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MapComponent } from "./map/map.component";

const routes: Routes = [ {
  path: "register",
  component: RegistrationComponent
},{
  path: "map",
  component: MapComponent
},{ 
  path: '',   
  redirectTo: '/login', 
  pathMatch: 'full' 
}, {
  path: 'login',
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
