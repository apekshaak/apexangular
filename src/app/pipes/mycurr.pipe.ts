import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mycurr'
})
export class MycurrPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
