import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resourceCategoryFilter'
})
export class ResourceCategoryPipe implements PipeTransform {

  transform(items: any[], criteria: string):any {
    if(criteria == 'all') {
      return items;
    } 
    else {
      return items
        .map(items => items.filter(x => 
          x.category === criteria
        ));
    }
  }

}