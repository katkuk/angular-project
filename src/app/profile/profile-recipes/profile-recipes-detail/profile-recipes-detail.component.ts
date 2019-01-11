import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Recipe } from 'src/app/recipes/recipe.model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-profile-recipes-detail',
  templateUrl: './profile-recipes-detail.component.html',
  styleUrls: ['./profile-recipes-detail.component.css']
})
export class ProfileRecipesDetailComponent implements OnInit {
  
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    //using the route - the parents observable - and subscribe to it
    //with that I can react to any changes in the route parameters
    //+params turns the string we will get into a nubmer
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        // this.recipe = this.userService.getUserRecipebyId(this.id);
        this.recipe = this.recipeService.getRecipebyId(this.id);
      }
    );
  }
  

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    console.log('lalaaa');
      //redirect two steps back relative to the current location
      this.router.navigate(['../'], {relativeTo: this.route})
      this.recipeService.deleteRecipe(this.id);
  }

}