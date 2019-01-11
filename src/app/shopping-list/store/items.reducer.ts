import { ItemsActions } from '../actions/items.actions';
import { Items } from '../model/items';

const INITIAL_STATE: Items = {
  list: [],
  active: {}
};

export function ItemsReducer(state: Items = INITIAL_STATE, action: any): any {
  let index, active, list;

  switch (action.type) {
    case ItemsActions.ITEMS_GET:
      return Object.assign({}, state, { list: action.payload.list });

    case ItemsActions.ITEMS_GET_ACTIVE:
      return state.active;

    case ItemsActions.ITEMS_DELETE:
      list = state.list
        .filter(({ id }) => id !== action.payload.id);
      return Object.assign({}, state, { list });

    case ItemsActions.ITEMS_ADD:
      state.list.push(action.payload.user);
      return state;

    case ItemsActions.ITEMS_UPDATE:
      list = [...state.list];
      index = list.findIndex(({ id }) => id === action.payload.user.id);
      list[index] = action.payload.user;
      return Object.assign({}, state, { list });

    case ItemsActions.ITEMS_SET_ACTIVE:
      active = state.list.find(({id}) => id === action.payload.id);
      return Object.assign({}, state, { active });


    case ItemsActions.ITEMS_RESET_ACTIVE:
      return Object.assign({}, state, { active: {} });

    default:
      return state;
  }
}

