import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatButtonToggleModule, MatCheckboxModule, MatRadioButton, MatRadioModule, MatGridListModule, MatStepperModule, MatMenuModule, MatTabsModule, MatDividerModule, MatSelectModule, MatTableModule} from '@angular/material';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ProfileComponent } from './profile/profile.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { LoginAndRegisterComponent } from './login-and-register/login-and-register.component';
import { RecipeService } from './recipes/recipe.service';
import { ProfileRecipesDetailComponent } from './profile/profile-recipes/profile-recipes-detail/profile-recipes-detail.component';
import { ProfileRecipesEditComponent } from './profile/profile-recipes/profile-recipes-edit/profile-recipes-edit.component';
import { ProfileRecipesListComponent } from './profile/profile-recipes/profile-recipes-list/profile-recipes-list.component';
import { UserService } from './user.service';
import { FirebaseService } from './firebase/firebase.service';
import { FilterPipe } from './profile/profile-recipes/profile-recipes-list/filter.pipe';

import { NgRedux, DevToolsExtension, NgReduxModule } from '@angular-redux/store';
import { IAppState } from './shopping-list/store';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { rootReducer } from './shopping-list/store'; // Added this to get the root reducer
import { CrudService } from './shopping-list/sl.crud.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    // ShoppingEditComponent,
    RecipeEditComponent,
    MainNavComponent,
    ProfileComponent,
    FavouritesComponent,
    LoginAndRegisterComponent,
    ProfileRecipesDetailComponent,
    ProfileRecipesEditComponent,
    ProfileRecipesListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, // now I can use ReactiveForms.
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    LayoutModule,
    MatToolbarModule,  MatSelectModule, MatTableModule,
    FormsModule,
    MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatButtonToggleModule,
    MatCheckboxModule, MatRadioModule, MatGridListModule, MatStepperModule, MatMenuModule, MatTabsModule, MatDividerModule,
    NgReduxModule,
    NgReduxModule, NgReduxRouterModule.forRoot()

  ],
  providers: [ShoppingListService, RecipeService, UserService, FirebaseService, CrudService],
  bootstrap: [AppComponent]
}) 


export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>,
    private devTool: DevToolsExtension,
    private ngReduxRouter: NgReduxRouter) {
   
    this.ngRedux.configureStore(rootReducer, {}, [],[ devTool.isEnabled() ? devTool.enhancer() : f => f]);

    ngReduxRouter.initialize(/* args */);   
  }
 
 }









