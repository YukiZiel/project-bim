import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BimobjectService } from '../services/bimobject.service';
import { Home } from '../interfaces/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  searchforName = '';
  constructor( public bimService: BimobjectService) {
      console.log('I am in home');
  }

 ngOnInit(): void {
   
 }
}