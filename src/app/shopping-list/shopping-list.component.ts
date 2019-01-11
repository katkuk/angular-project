import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Observable } from 'rxjs';
import { select } from '@angular-redux/store';


import { ItemsActions } from './actions/items.actions';
import { Items } from './model/items'



@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent {

  @select('items') public items$: Observable<Items>;
  @select(['items', 'active']) active$;
  activeItem;

  constructor(public actions: ItemsActions) { 
    actions.getItems();
  }

  ngOnInit() {
    this.active$.subscribe(res => {
      this.activeItem = res;
    });
  }

  save(f: any){
    //merge form data with data model
    // since form does not include all fields
    const newItem = Object.assign({}, this.activeItem, f.value);
    this.actions.save(newItem);
  }

}
