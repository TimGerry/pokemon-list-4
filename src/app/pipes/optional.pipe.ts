import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'optional',
  standalone: true
})
export class OptionalPipe implements PipeTransform {

  transform(value: string | undefined, message?: string): string {
    return value ?? message ?? '-';
  }
}
