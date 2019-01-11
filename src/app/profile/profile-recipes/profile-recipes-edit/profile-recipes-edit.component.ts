import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { Recipe } from 'src/app/recipes/recipe.model';

@Component({
  selector: 'app-profile-recipes-edit',
  templateUrl: './profile-recipes-edit.component.html',
  styleUrls: ['./profile-recipes-edit.component.css']
})
export class ProfileRecipesEditComponent implements OnInit {

  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          //since we are already listening to page reload here in the changes of parameters,
          //we can also call initForm() here
          this.initForm();
        }
      );
  }

  onSubmit(){
    const newRecipe = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients']
      );

    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, newRecipe);
      //redirect two steps back relative to the current location
      this.router.navigate(['../../'], {relativeTo: this.route})
    } else {
      this.recipeService.addRecipe(newRecipe);
      //redirect one step back relative to the current location
      this.router.navigate(['../'], {relativeTo: this.route})
    }
  }

  private initForm() {

    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    //form array ([]) means that it is initialised
    //as an empty array. we need this because each ingredient has name and amount
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipebyId(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;

      //if there are ingredients in this recipe then load them. it might be that some recipes are saved without recipes for example and
      //then the code would break
      if (recipe['ingredients']) {
        for(let ingredient of recipe.ingredients) {
          //I am pushing already existing ingredients into a FormArray so I can use them in the form as already existing values
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name),
              'amount': new FormControl(ingredient.amount)
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath),
      'recipeDescription': new FormControl(recipeDescription),
      'ingredients': recipeIngredients
    });
  }

  //adding a new control to the ingredient array of form controls
  onAddIngredient() {
    //<FormArray casts the type of the ingredients ARRAY on this get because we are trying to
    //tell typescript explicetly that this is an array
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(),
        'amount': new FormControl()
      })
    );
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

}
