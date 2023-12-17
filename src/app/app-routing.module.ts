import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { DetailComponent } from './detail/detail.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { filter } from 'rxjs';
import { HomeManufactComponent } from './home-manufact/home-manufact.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'search', component: SearchComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'register', component: RegisterComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'manufacturers', component:HomeManufactComponent},
  { path: '**', pathMatch:'full', redirectTo:'' }   //Redirecciona a la home si no encuentra la ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

