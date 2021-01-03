import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showVerification'
})
export class ShowVerificationPipe implements PipeTransform {

  transform(value: boolean, args: boolean = false): unknown {
    if (value === true) {
      return 'Tak';
    }
    else {
      return 'Nie';
    }
  }

}
