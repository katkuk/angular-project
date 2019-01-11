import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { User } from '../shared/users.model';
import { UserService } from '../user.service';

@Injectable()
export class FirebaseService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private userService: UserService) {
  }


  //put request overwrites the existing data
  storeRecipes(){
    this.httpClient.put('https://foodies-dream.firebaseio.com/recipes.json', this.recipeService.getRecipes())
    .subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  getRecipes() {
    this.httpClient.get<Recipe[]>('https://foodies-dream.firebaseio.com/recipes.json')
      .subscribe(
        //httpClient automatically extracts the body of the response, so we don't need response.json() for example
        (recipes) => {
          // console.log(response);
          // const recipes: Recipe[] = response.json();
          
          this.recipeService.updateRecepies(recipes);
          console.log("Got back: "+ JSON.stringify(recipes[0]));
        }
      );
  }


}
