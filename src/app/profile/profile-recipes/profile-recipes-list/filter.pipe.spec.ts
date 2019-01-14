import { FilterPipe } from './filter.pipe';
import { TestBed, async } from '@angular/core/testing';

fdescribe('App: Items Filter', () => {

  let listItems;
  let filter = new FilterPipe(); // Arrange


  beforeEach(() => {

   TestBed.configureTestingModule({
     declarations: [
      FilterPipe
     ],
   });  
  });
  
  it('1.0: Searching for letter "s" should give me 2 results', () => {

    listItems = [
      {"name": "Pizza"},
      {"name": "Pasta"},
      {"name": "Soup"}
    ]

    let result = filter.transform(listItems, 's'); 
    expect(result.length).toBe(2); 
    expect(result[0].name).toBe('Pasta');
  });

 });
