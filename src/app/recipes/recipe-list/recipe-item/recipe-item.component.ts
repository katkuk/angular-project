import { Component, OnInit, Input} from '@angular/core';

import { Recipe } from '../../recipe.model';
// import { EventEmitter } from 'events';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  //@Input decorator allows me to bind this component property inside of this component
  @Input() recipe: Recipe;
  //I will pass the index of recipe item from recipe-list component
  @Input() index: number;

  ngOnInit() {
  }


}
