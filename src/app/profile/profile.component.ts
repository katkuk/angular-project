import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  loggedInUser;
  userRecipes: Recipe[];

  constructor( private userService: UserService, 
               private recipeService: RecipeService) { }

  ngOnInit() {
    this.loggedInUser = this.userService.getUserById();
  }

  

  onLogout() {
    //clear local storage
    //do that logout() thing
  }

}
