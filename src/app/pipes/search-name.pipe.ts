import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchName'
})
export class SearchNamePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const searchforname = [];
    for( const recorrido of value){
      if (recorrido.description.toLowerCase().indexOf(arg.toLowerCase()) > -1 ){
        searchforname.push(recorrido);
      }
    }
    return searchforname;
  }

}
