import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  //stores if we are editing a recipe or creating a new one
  editMode = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //retreive the id of a recipe
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        //i want to see if params has an id property, if yes, it will be string, if not it will be null.
        this.editMode = params['id'] != null;
        // console.log(this.editMode);
      }
    );
  }

}
