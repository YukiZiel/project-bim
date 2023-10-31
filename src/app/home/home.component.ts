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

  bimObjects: any[] = [];

  constructor(private http: HttpClient) {
    this.loadObjects();
    // const url = 'https://api.itec.cat/bim/filters/ca'; this.http.get(url)
    //   .subscribe((data) => {     
    //     console.log('Respuesta de la API:', data);
    //   },   
    //   (error) => {     
    //     console.error('Error al hacer la petición:', error);     
    //   } );
  }

  loadObjects() {
  //  var requestOptions:any = {
  //               method: 'GET',
  //               redirect: 'follow'
  //           };
 
  //           fetch("https://api.itec.cat/bim/filters/ca", requestOptions)
  //               .then(response => response.text())
  //               .then(result => console.log(result))
  //               .catch(error => console.log('error', error));
  //       }
  //   const headers = new HttpHeaders({
  //     'x-itec-user-settings': JSON.stringify({ Idioma: 'ca' }), 
  //     'x-api-version': 'v1',
  //     'Access-Control-Allow-Origin': '*/*'
  //   });

    // const options = { headers: headers };

    this.http.get<any>('https://api.itec.cat/bim/filters/ca',)
      .subscribe((ans: any[]) => {
        this.bimObjects = ans;
        console.log(this.bimObjects);
      });
  }
  ngOnInit(): void {}
}