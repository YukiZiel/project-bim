import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBim'
})
export class OrderBimPipe implements PipeTransform {

  transform(value: any): any {
    return value.sort((a:any, b:any) => {
      if (a.description < b.description) {
        return -1;
      }
      if (a.description > b.description) {
        return 1;
      }
      return 0;
    });
  }

  
}
