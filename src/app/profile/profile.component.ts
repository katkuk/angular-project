import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { UserAuthService } from '../user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  loggedInUser;
  userRecipes: Recipe[];

  constructor( private userService: UserService, 
               private recipeService: RecipeService,
               private userAuthService: UserAuthService,
               private router: Router) { }

  ngOnInit() {
    this.loggedInUser = this.userService.getUserById();
  }

  

  onLogout() {
    console.log('logout clicked');
    //clear local storage
    localStorage.removeItem('userId');
    //do that logout() thing
    this.userAuthService.logout();
    this.router.navigate(['register-login']);
  }

}
