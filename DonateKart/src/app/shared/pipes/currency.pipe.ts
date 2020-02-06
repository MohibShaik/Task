import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyR'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: any, type: string, usd, inr?): any {
    if (!type) {
      type = '';
      return value;
    }
    if (!value || typeof value == 'object') {
      return value;
    }
    console.log(value, type, usd)
    if (type.toLowerCase() === 'usd') {
      return value / inr;
    }
    if (type.toLowerCase() === 'inr') {
      return value;
    }


  }

}
