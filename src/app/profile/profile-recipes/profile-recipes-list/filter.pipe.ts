import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from '../../../recipes/recipe.model';
import { RecipeService } from 'src/app/recipes/recipe.service';


@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

//transform method is called every time that the pipe is used
  transform(recipes: Recipe[], filterString: String): any {

    //check if search term is undefined
    if (filterString === undefined) return recipes;
    // //return the updated recipes array
    // console.log(recipes);

    // // .filter is a method
    // return recipes.filter(function(recipe){
    //   return recipe.name.toLowerCase().includes(filterString.toLowerCase());
    // })

    const resultArray = [];

    for (const recipe of recipes) {
      const lowerName = recipe.name.toLowerCase();
      const lowerString = filterString.toLowerCase();
      if (lowerName.includes(lowerString)){
        resultArray.push(recipe);
      }  
    }

    return resultArray;
  }

}
