import { Injectable } from '@angular/core';
import { IAppState } from '../store/index';
import { NgRedux } from '@angular-redux/store';
import { Item } from '../model/items';
import { Http } from '@angular/http';

@Injectable()
export class ItemsActions {

  static ITEMS_GET = 'ITEMS_GET';
  static ITEMS_ADD = 'ITEMS_ADD';
  static ITEMS_UPDATE = 'ITEMS_UPDATE';
  
  static ITEMS_DELETE = 'ITEMS_DELETE';
  static ITEMS_GET_ACTIVE = 'ITEMS_GET_ACTIVE';
  static ITEMS_SET_ACTIVE = 'ITEMS_SET_ACTIVE';
  static ITEMS_RESET_ACTIVE = 'ITEMS_RESET_ACTIVE';

  // API_URL = 'https://jsonplaceholder.typicode.com';
  API_URL = 'https://foodies-dream.firebaseio.com';

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private http: Http,
  ) {
  }

  getItems() {
    this.http.get(`${this.API_URL}/items`)
      .subscribe((res) => {
        // get items
        const list = res.json();
        // populate items state (dispatch action)
        this.ngRedux.dispatch({
          type: ItemsActions.ITEMS_GET,
          payload: {
            list
          }
        });
        // Set the first item as active (dispatch action)
        this.setActiveItem(list[0].id);
      });
  }

  save(item: Item) {
    if (item.id) {
      this.update(item);
    } else {
      this.add(item);
    }
  }

  add(item: Item): void {
    this.http.post(`${this.API_URL}/items/`, item)
      .subscribe((res) => {
        // add new item
        this.ngRedux.dispatch({
          type: ItemsActions.ITEMS_ADD,
          payload: { item: res.json() }
        });

        // select last added item
        this.setActiveItem(res.json().id);
      });
  }

  update(item: Item) {
    this.http.patch(`${this.API_URL}/items/${item.id}`, item)
      .subscribe((res) => {
        // update item
        this.ngRedux.dispatch({
          type: ItemsActions.ITEMS_UPDATE,
          payload: { item: res.json() }
        });

        // update active item
        this.setActiveItem(item.id);
      });
  }

  deleteItem(id): void {
    this.http.delete(`${this.API_URL}/items/${id}`)
      .subscribe((res) => {
        this.ngRedux.dispatch({
          type: ItemsActions.ITEMS_DELETE,
          payload: { id }
        });
        this.resetActive();
      });
  }

  setActiveItem(id: string): void {
    this.ngRedux.dispatch({
      type: ItemsActions.ITEMS_SET_ACTIVE,
      payload: { id }
    });
  }

  resetActive(): void {
    this.ngRedux.dispatch({
      type: ItemsActions.ITEMS_RESET_ACTIVE,
      payload: null
    });
  }
}
