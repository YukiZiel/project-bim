import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchName'
})
export class SearchNamePipe implements PipeTransform {

  transform(value: any, arg: string): any {
    const searchforname = [];
    for( const route of value){
      if (route.description.toLowerCase().indexOf(arg.toLowerCase()) > -1 ){
        searchforname.push(route);
      }
    }
    return searchforname;
  }

}
