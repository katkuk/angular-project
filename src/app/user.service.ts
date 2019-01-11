import { Injectable } from '@angular/core';

import { User } from './shared/users.model'
import { Recipe } from './recipes/recipe.model';
import { Ingredient } from './shared/ingredients.model';
 
@Injectable({
  providedIn: 'root'
})

export class UserService {

  private static users: User[] = [
    {
      userId: '1',
      username: 'Nick',
      picture: 'https://imgix.bustle.com/rehost/2016/9/13/b0008628-ab7e-4e5b-9276-8e9418fd879c.png?w=970&h=582&fit=crop&crop=faces&auto=format&q=70',
      email: 'nick@email.com',
      password: '123',
      repeatPassword: '123',
      description : 'Hello I am Nick. I cook food.',
      recipes: [
        new Recipe (
          'Another one', 
          'jejejeje', 
          'https://media-cdn.tripadvisor.com/media/photo-s/0d/fc/df/21/cevapi-with-onions.jpg',
          [   new Ingredient('Buns', 2),
              new Ingredient('Nesto', 40)
          ]
        )
      ]
    },
    {
      userId: '2',
      username: 'Jessica',
      picture: 'https://imgix.bustle.com/rehost/2016/9/13/2c1b90eb-091d-4b08-9372-34116621322e.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70',
      email: 'jessica@email.com',
      password: '123',
      repeatPassword: '123',
      description : 'Hello I am Jessica.',
      recipes: [
        new Recipe (
          'Another one', 
          'jejejeje', 
          'https://media-cdn.tripadvisor.com/media/photo-s/0d/fc/df/21/cevapi-with-onions.jpg',
          [   new Ingredient('Buns', 2),
              new Ingredient('Nesto', 40)
          ]
        )
      ]
    },
    {
      userId: '3',
      username: 'Schmidt',
      picture: 'https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2013/10/schmidt_new_girl.jpg',
      email: 'schmidt@email.com',
      password: '123',
      repeatPassword: '123',
      description : 'Hello I am Schmidt.',
      recipes: [
        new Recipe (
          'Another one', 
          'jejejeje', 
          'https://media-cdn.tripadvisor.com/media/photo-s/0d/fc/df/21/cevapi-with-onions.jpg',
          [   new Ingredient('Buns', 2),
              new Ingredient('Nesto', 40)
          ]
        )
      ]
    }
  ]

  constructor() { }

  public addUser(user: User) {
    UserService.users.push(user);
    console.log(UserService.users);
  }

  public getUsers () : User[] {
      //slice will simply return a new array wich is a copy of the array in this service array, so
      // we can't store it from outside
      return UserService.users;
  }

  loggedInUser;

getUserById () {
    var usersArray = UserService.users;
    var localStorageId = localStorage.getItem('userId');
    // console.log('Id from local storage is:'+ this.localStorageId);
    
    usersArray.forEach((user) => {
      if(user.userId == JSON.parse(localStorageId)){
        console.log(user.username + ' is logged in.');
        this.loggedInUser = user;
      }
    });
    return this.loggedInUser;
  }

  // getRecipebyId(index: number) {
  //   return this.recipes[index];
  // }

  getUserRecipebyId(index: number){
    return this.loggedInUser.recipes[index]; 
  }


}

