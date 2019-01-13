//<reference path='./../../node_modules/immutable/dist/immutable.d.ts'/>

import { CrudService } from './sl.crud.service';
import { tassign } from 'tassign';
import { ItemsActions } from './sl.actions';
import { ItemsState } from './store';
import { Item } from './item.model';

// items: [] = this.CrudService.getAllItems();

const INITIAL_STATE: ItemsState = { isActive: undefined, 
                                    // items: CrudService.getAllItems(), 
                                    items: [],
                                    errorMessage: '', 
                                    isLoading: false }; // 

export function itemsReducer(state: ItemsState = INITIAL_STATE, action:any) {
  
 switch (action.type) {

  case ItemsActions.UPDATE_ITEM: // action.payload : Sitter
    // const updateArray = [...state.sitters];
    const index = state.items.findIndex(item => item[index] === action.payload.id);
    // updateArray[index] = action.payload;
    return state;
    // return tassign(state, { sitters: state.sitters.set(index, action.payload)});

  case ItemsActions.CREATE_ITEM:
    // return Object.assign({}, state, { isLoading: true });
    return tassign(state, { isLoading: true });

  case ItemsActions.DELETE_ITEM: // action.payload is an id: String
    return tassign(state, {items: state.items.filter(x => x[index] !== action.payload)});

  case ItemsActions.ITEMS_SET_ACTIVE:
    // pure function
    // state.isBaby = action.payload; // No No.
    // return state;
    
    // return Object.assign({}, state, {iszBaby: action.payload}); //Yes
    return tassign(state, { isActive: action.payload }); // Yes Yes

  case ItemsActions.ITEMS_RESET_ACTIVE:
    return tassign(state);  
  
  
    default:
      return state;
}
}


