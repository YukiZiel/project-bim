import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'Proyect BIM';
  // data: any[] = [];

  // constructor(
  //   private http: HttpClient
  // ) {}

  // ngOnInit() {
  //   this.http.get('https://api.itec.cat/bim/filters/ca')
  //   .subscribe((data:any) => {
  //     this.data = data;
  //   })
  // }
}
