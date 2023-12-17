import { Component } from '@angular/core';
import { BimobjectService } from '../services/bimobject.service';

@Component({
  selector: 'app-home-manufact',
  templateUrl: './home-manufact.component.html',
  styleUrls: ['./home-manufact.component.css']
})
export class HomeManufactComponent {
  searchforName = '';
  constructor( public bimService: BimobjectService) {

  }

 ngOnInit(): void {
 }
}
