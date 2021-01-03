import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showStatus'
})
export class ShowStatusPipe implements PipeTransform {

  transform(value: boolean, args: boolean = false): unknown {
    if (value === true) {
      return 'Aktywny';
    }
    else {
      return 'Nieaktywny';
    }
  }

}
