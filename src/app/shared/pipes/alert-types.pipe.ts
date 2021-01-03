import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alertTypes'
})
export class AlertTypesPipe implements PipeTransform {

  transform(value: string, args: string = ''): unknown {
    if (value === 'OTHER') {
      return 'Inne';
    }
    else if (value === 'WATER') {
      return 'Ostrzeżenie wodne';
    }
    else {
      return 'Ostrzeżenie pogodowe';
    }
  }

}
