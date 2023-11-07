import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BimobjectService {

bimObjects: any[] = [];

  constructor(private http: HttpClient) {
    this.loadObjects();
  }

  detail(id:string) {
    return this.http.get(`https://api.itec.cat/bim/bim/1639958/es/${id}`)
  }

  loadObjects() {

    this.http.get<any>('https://api.itec.cat/bim/filters/es')
      .subscribe((response: any) => {
        this.bimObjects = response.bims;
        console.log(this.bimObjects);
      });
  }
}

  // loadObjects() {
  //   const headers = new HttpHeaders({
  //     'x-itec-user-settings': JSON.stringify({ Idioma: 'es' }),
  //     'x-api-version': 'v1'
  //   });

  //   const options = { headers: headers };

  //   return this.http.get('https://api.itec.cat/bim/filters/es/bims', options)
  //     .subscribe((ans:any) => {
  //       this.bimObjects = ans;
  //       console.log(this.bimObjects);
  //     })
  // }





