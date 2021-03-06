import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardsearch'
})
export class CardsearchPipe implements PipeTransform {

  transform(items: any, searchValue: any): any {
    if ( items === null || items === '' || searchValue === null || searchValue === '' ) {
      return items;
    }
    else {
      searchValue = searchValue.toLowerCase();
      return items.filter(item => {
        return item.title.toLowerCase().includes(searchValue);
      });
    }
  }

}
