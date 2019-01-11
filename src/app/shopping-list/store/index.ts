import { combineReducers } from 'redux';

import { ItemsReducer } from './items.reducer';
import { Items } from '../model/items';

export class IAppState {
  items: Items;
};

export const rootReducer = combineReducers<IAppState>({
  items: ItemsReducer,
});


