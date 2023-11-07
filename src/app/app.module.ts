import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Agregados por mí */
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { OrderBimPipe } from './pipes/order-bim.pipe';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list'; 
import { MatIconModule } from '@angular/material/icon';
import { SearchNamePipe } from './pipes/search-name.pipe';
import { HomeManufactComponent } from './home-manufact/home-manufact.component'; 

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    SearchComponent,
    FilterComponent,
    HomeComponent,
    DetailComponent,
    OrderBimPipe,
    SearchNamePipe,
    HomeManufactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
