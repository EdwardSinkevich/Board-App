import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], criterion: string): any[] {
    return criterion ? value.filter(item => item.name.toUpperCase().startsWith(criterion.toUpperCase())) : value;
  }

}
