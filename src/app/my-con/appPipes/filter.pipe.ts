import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false  // if false than this pipe is impure default id true mean is pure pipe
})
export class FilterPipe implements PipeTransform {

  transform(value: any,searchTerm: any): any {
    if(value.length ===0){
      return value;
    }else{
      return value.filter(function(search) {
        return search.name.toLowerCase().indexOf(searchTerm.toLowerCase())> -1;
      });
    }
    
  }

}
