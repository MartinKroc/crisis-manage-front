import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colored'
})
export class ColoredPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
