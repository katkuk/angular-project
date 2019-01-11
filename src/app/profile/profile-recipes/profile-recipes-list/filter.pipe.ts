import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

//transform method is called every time that the pipe is used
  transform(recipes: any, filterString: String): any {

    //check if search term is undefined
    if (filterString === undefined) return recipes;
    //return the updated recipes array

    //.filter is a method
    return recipes.filter(function(recipe){
      return recipe.name.toLowerCase().includes(filterString.toLowerCase());
    })

  }

}
