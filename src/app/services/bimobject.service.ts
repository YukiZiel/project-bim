import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BimobjectService {

bimObjects: any[] = [];
bimManufact: any[] = [];

  constructor(private http: HttpClient) {
    this.loadObjects();
    this.loadManufacturers();
  }

  detail(id:string) {
    return this.http.get(`https://api.itec.cat/bim/bim/1639958/es/${id}`)
  }

  loadObjects() {
    const headers = {
      'x-api-version': 'v1',
      'x-itec-user-settings':
          JSON.stringify({filtres:{},biblioteca:"generics",search:""})
    };

    const requestOptions = {
      headers: headers
    }
    this.http.get<any>('https://api.itec.cat/bim/filters/es', requestOptions)
      .subscribe((response: any) => {
        this.bimObjects = response.bims;
        console.log(this.bimObjects);
    });
  }

  loadManufacturers() {
    const headers = {
      'x-api-version': 'v1',
      'x-itec-user-settings':
          JSON.stringify({filtres:{},biblioteca:"fabricants",search:""})
    };

    const requestOptions = {
      headers: headers
    }

    this.http.get<any>('https://api.itec.cat/bim/filters/es', requestOptions)
      .subscribe((response: any) => {
        this.bimManufact = response.bims;
        console.log(this.bimManufact);
      });
  }

  // search(query:string): Observable<any[]> {
  //   return this.http.get<any[]>(`https://api.itec.cat/bim/search/${query}`)
  // }
}

  // loadObjects() {
  //   const headers = new HttpHeaders({
  //     'x-itec-zzzz': JSON.stringify({ Idioma: 'es' }),
  //     'x-api-version': 'v1'
  //   });

  //   const options = { headers: headers };

  //   return this.http.get('https://api.itec.cat/bim/filters/es/bims', options)
  //     .subscribe((ans:any) => {
  //       this.bimObjects = ans;
  //       console.log(this.bimObjects);
  //     })
  // }




//     this.http.get<any>(`https://api.itec.cat/bim/bim/1639958/es/${id}/prophardcore`)



