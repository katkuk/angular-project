import { CrudService } from './sl.crud.service';
import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})

//Helper for generating redux actions.
export class ItemsActions {

  constructor ( private ngRedux: NgRedux<IAppState>, 
                private crudService: CrudService) {} 
  
  static CREATE_ITEM: string = 'CREATE_ITEM'; 
  static DELETE_ITEM: string = 'DELETE_ITEM'; 
  static UPDATE_ITEM: string = 'UPDATE_ITEM'; 

  static ITEMS_SET_ACTIVE: string = 'ITEMS_SET_ACTIVE';
  static ITEMS_RESET_ACTIVE: string = 'ITEMS_RESET_ACTIVE';


  // createItem(item: Item):void {
  //   this.ngRedux.dispatch({
  //     type: ItemsActions.CREATE_ITEM
  //   } as any)

  //   this.crudService.createItem(item).subscribe(result => {
  //    // on success 
  //    this.ngRedux.dispatch({
  //      type: ItemsActions.CREATE_ITEM_SUCCESS,
  //      payload: item
  //    });
  //   });
  // }

  createItem(item: Item):void {
    this.ngRedux.dispatch({
      type: ItemsActions.CREATE_ITEM,
      payload: item
    });
  }
 
  updateItem(index: number, updatedItem: Item) {
    this.ngRedux.dispatch({
      type: ItemsActions.UPDATE_ITEM,
      payload: updatedItem
    });
  }

  deleteItem(index: number) {
      this.ngRedux.dispatch({
        type: ItemsActions.DELETE_ITEM,
        payload: index
      });
  }

  setActiveUser(index: number): void {
    this.ngRedux.dispatch({
      type: ItemsActions.ITEMS_SET_ACTIVE,
      payload: { index }
    });
  }

  resetActive(): void {
    this.ngRedux.dispatch({
      type: ItemsActions.ITEMS_RESET_ACTIVE,
      payload: null
    });
  }

}