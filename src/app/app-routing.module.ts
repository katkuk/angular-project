


import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { ProfileComponent } from "./profile/profile.component";
import { FavouritesComponent } from "./favourites/favourites.component";
import { LoginAndRegisterComponent } from "./login-and-register/login-and-register.component";
import { UserAuthGuard } from "./user-auth.guard";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { ProfileRecipesEditComponent } from "./profile/profile-recipes/profile-recipes-edit/profile-recipes-edit.component";
import { ProfileRecipesDetailComponent } from "./profile/profile-recipes/profile-recipes-detail/profile-recipes-detail.component";
import { ProfileRecipesListComponent } from "./profile/profile-recipes/profile-recipes-list/profile-recipes-list.component";

//an object in which each object represents the route
const appRoutes: Routes = [
    //first a path where the app is loaded
    //pathMatch full means it will redirect only if the full path is empty
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    // { path: 'profile', component: ProfileComponent, canActivate: [UserAuthGuard] },
    { path: 'profile', component: ProfileComponent, children: [
        {path: '', component: ProfileRecipesListComponent},
        {path: 'new', component: ProfileRecipesEditComponent},
        {path: ':id', component: ProfileRecipesDetailComponent},
        {path: ':id/edit', component: ProfileRecipesEditComponent}
    ]},
    { path: 'favourites', component: FavouritesComponent },
    { path: 'home', component: RecipesComponent, children: [
        {path: '', component: RecipeListComponent },
        {path: 'list', component: RecipeListComponent},
        {path: 'new', component: RecipeEditComponent},
        //always first put paths that are hardcoded then ones with parameter
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent}
    ] },
    { path: 'shopping-list', component: ShoppingListComponent},
    { path: 'register-login', component: LoginAndRegisterComponent }
]

//ng module transforms from a regular class to angular module
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}