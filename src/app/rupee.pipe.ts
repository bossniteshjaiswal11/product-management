import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rupee',
  standalone: true
})
export class RupeePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "₹" + value;
  }

}
