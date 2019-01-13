import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Observable } from 'rxjs';
import { select } from '@angular-redux/store';


import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store';
import { Item } from './item.model';
import { CrudService } from './sl.crud.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent {

  items: Item[];
  errorMessage: String;

  // DI - Dependency injection
  constructor(private crudService: CrudService,
    private ngRedux: NgRedux<IAppState>) { 
    this.items = this.crudService.getAllItems();
  }



  ngOnInit() {
    this.ngRedux.select(res => res.items).subscribe((data) => {
      console.log("redux says: ", data);
      this.items = data.items;
    })
  }

}
