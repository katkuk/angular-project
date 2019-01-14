import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { UserService } from 'src/app/user.service';
import { RecipeService } from 'src/app/recipes/recipe.service';

@Component({
  selector: 'app-profile-recipes-list',
  templateUrl: './profile-recipes-list.component.html',
  styleUrls: ['./profile-recipes-list.component.css']
})
export class ProfileRecipesListComponent implements OnInit {

  userRecipes: any;

  filteredRecipes = '';
  showR = true;

  constructor( private userService: UserService, 
               private recipeService: RecipeService) { }

  ngOnInit() {
    var loggedInUser = this.userService.getUserById();

    this.recipeService.recipesChanged
    .subscribe(
      (recipes: Recipe[]) => {
        this.userRecipes = recipes;
      }
    )
    //samo za sad nek bude ovo
      this.userRecipes = this.recipeService.getRecipes();
    //a ne kak bi stvarno trebalo bit
    // this.userRecipes = loggedInUser.recipes;
}

switch(){
  console.log('222');
  this.showR = !this.showR;
}

//just some data to try to filter

listItems = [
  {"name": "Pizza"},
  {"name": "Pasta"},
  {"name": "Soup"}
]

}
