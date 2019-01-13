//<reference path='./../../node_modules/immutable/dist/immutable.d.ts'/>

import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { itemsReducer } from './sl.reducer';
import { Item } from './item.model';

export class ItemsState {

  static getEmptyState() {
    return {isActive: undefined, items: [], errorMessage: ''};
  }

  // isBaby: boolean;
  isActive: boolean;
  // We should store all our sitters here.
  // sitters: Immutable.List<Sitter>;
  items: Item[];
  errorMessage: String;
  isLoading: boolean;
}
export class IAppState {
  items?: ItemsState;
}
export const rootReducer = combineReducers<IAppState>({
items: itemsReducer,

// router: routerReducer
});




