import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { ItemsActions } from './sl.actions';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

    itemsChanged = new Subject<Item[]>();
  
  items: Item[] = [
      {
          'id': '3434rffwr3',
          'item': 'sugar',
          'amount': '50g'
      },
      {
        'id': 'rrt4543gyt3',
        'item': 'beans',
        'amount': '1 can'
    }
  ]

  constructor() { }

  getAllItems() {
    return this.items;
  }  

  createItem(item: Item) {
    this.items.push(item);
    this.itemsChanged.next(this.items.slice());
  }

  updateItem(index: number,item: Item) {
    this.items[index] = item;
    this.itemsChanged.next(this.items.slice());
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
    this.itemsChanged.next(this.items.slice());
  }
}
