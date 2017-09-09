import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activeFilter'
})
export class ActiveFilterPipe implements PipeTransform {

  transform(items: any[], criteria: string):any {
    if(criteria == 'all') {
      return items;
    } 
    else {
      
    // use this when using filter with async list  
    // return items
    //   .map(items => items.filter(x => 
    //     x.instrument === criteria
    //   ));

      return items.filter(x => 
        x.active === (criteria === 'Active' ? true : false)
      );

    // use this for using filter with static lists
      // return items.filter(item => {
      //   return item.category === criteria;
      // });  


    }
  }

}