
import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/internal/Subject';

//injecting service into a service is done by @injectable()

@Injectable()

export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
        'A Test Recipe12345', 
        'This is simply a test', 
        'https://coolinarika.azureedge.net/images/_variations/a/7/a7c4a4659fa4b044a45f1d2879c71704_header.jpg?v=1',
        [   new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe(
        'Another one', 
        'jejejeje', 
        'https://media-cdn.tripadvisor.com/media/photo-s/0d/fc/df/21/cevapi-with-onions.jpg',
        [   new Ingredient('Buns', 2),
            new Ingredient('Nesto', 40)
        ]),
        new Recipe(
        'Super cool recipe', 
        'Pablo Picasso', 
        'https://img1.southernliving.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2017/12/main/2552101_saver_020_0.jpg?itok=x4fM6DkH',
        [   new Ingredient('Chocolate', 2),
            new Ingredient('Sugar', 100)
        ])
      ];

      constructor(private slService: ShoppingListService ) {}

      getRecipes(){
          //slice will simply return a new array wich is a copy of the array in this service array, so
          // we can't store it from outside
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }

      getRecipebyId(index: number) {
        return this.recipes[index];
      }

      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecepies(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
      }

}


