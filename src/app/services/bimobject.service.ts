import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Home } from '../interfaces/home';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BimobjectService {

  bimObjects: any[] = [];

  constructor( private http: HttpClient) {
    this.loadObjects();
  }

  detail( id: string) {
    return this.http.get(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`)
    // return this.http.get('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/' + id + '.json');
  }
  loadObjects() {
    return this.http.get<any>('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
    .subscribe((ans: any[]) => { 
      this.bimObjects = ans;
      console.log(this.bimObjects);
    })
  }

  // loadObjects() {
  //   const headers = new HttpHeaders({
  //     'x-itec-user-settings': JSON.stringify({ Idioma: 'ca' }),
  //     'x-api-version': 'v1'
  //   });

  //   const options = { headers: headers };

  //   return this.http.get('https://api.itec.cat/bim/filters/ca/bims', options)
  //     .subscribe((ans:any) => {
  //       this.bimObjects = ans;
  //       console.log(this.bimObjects);
  //     })
  // }
}




