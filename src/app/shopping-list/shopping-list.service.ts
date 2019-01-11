import { Ingredient } from "../shared/ingredients.model";
import { Subject } from "rxjs/internal/Subject";



export class ShoppingListService {
    //creating an event that will inform addIngredient that there is a changed ingredient array available
    //this could also be done just by removing slice
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject <number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];

      getIngredients(){
          //gives you only a copy of the service so you can't access the original service
          return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
      }
    //below method used for adding recipe ingredients directly from the recipe details
      addIngredients(ingredients: Ingredient[]){
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }
        //... is the spread operator that spreads the ingredients array into a list of one by one that are pushed into the new array
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
      }

    //below method used for getting ingredient from shopping list in order to edit it in the form

      getIngredient(index: number){
          return this.ingredients[index];
      }

}