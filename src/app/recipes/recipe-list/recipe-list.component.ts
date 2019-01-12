import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  //now typescript knows that the only thing that will be stored in this recipes array is a list of Recipe objects
  //that will be made according to recipe model/class
  // recipes: Recipe[] = [
  //   new Recipe('A Test Recipe', 'This is simply a test', 'https://coolinarika.azureedge.net/images/_variations/a/7/a7c4a4659fa4b044a45f1d2879c71704_header.jpg?v=1'),
  //   new Recipe('Another one', 'jejejeje', 'https://media-cdn.tripadvisor.com/media/photo-s/0d/fc/df/21/cevapi-with-onions.jpg')
  // ];

  recipes: any;

  constructor( private recipeService: RecipeService,
               private router: Router,
               private route: ActivatedRoute,
               private userService: UserService) {

   } 

  ngOnInit() {
    // this.recipes = this.recipeService.getRecipes();

    this.recipeService.recipesChanged
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    )
      this.recipes = this.recipeService.getRecipes();
      console.log('recipes are...'+ this.recipeService.getRecipes());
  }

  onNewRecipe() {
    //we need to inform the Router of our current route - Activated Route
    this.router.navigate(['new'], {relativeTo: this.route});
  }


}
