import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  
  transform(name: string): string {
  if(name.length > 3) {
    return name.substring(0,3)  + '...'; 
    } else {
      return name;
    }
  }
}
