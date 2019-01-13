import { TempDataService } from './temp-data.service';
var deepFreeze = require('deep-freeze');
import { sittersReducer } from './sitters.reducer';
import * as types from './sitters.actions';
import { SittersState } from './store';

describe('sitters reducer', () => {
  it('should return the initial state', () => {
    expect(sittersReducer(undefined, {})).toEqual({isBaby: undefined, sitters: TempDataService.getOriginalSitters(), errorMessage: '' });
  });

  it('Toggle isBaby or sitter', () => {
    let state = SittersState.getEmptyState();
    deepFreeze(state);
    expect( sittersReducer(state, { type: types.SittersActions.SET_IS_BABY, payload: true })).toEqual({isBaby: true, sitters:[], errorMessage: ''});
  });

  it('should delete a sitter with a valid input', () =>{
    //1: create our initial state
    //2: use deep freeze
    //3: Expect the newly returned state from the reducer to be..
    let state = SittersState.getEmptyState()
    state.sitters = TempDataService.getOriginalSitters();

    deepFreeze(state);
    let afterStateShouldBe = {isBaby: undefined, sitters: TempDataService.getOriginalSitters(), errorMessage: ''};
    afterStateShouldBe.sitters.splice(1, 1);

    let newState = sittersReducer(state, { type: types.SittersActions.DELETE_SITTER, payload: '2'});
    expect( newState ).toEqual( afterStateShouldBe );
  });

  it('should delete a sitter with a in-valid input', () =>{
    //1: create our initial state
    //2: use deep freeze
    //3: Expect the newly returned state from the reducer to be..
    let state = SittersState.getEmptyState()
    state.sitters = TempDataService.getOriginalSitters();

    deepFreeze(state);
    let afterStateShouldBe = {isBaby: undefined, sitters: TempDataService.getOriginalSitters(), errorMessage: ''};
    // afterStateShouldBe.sitters.splice(1, 1);

    let newState = sittersReducer(state, { type: types.SittersActions.DELETE_SITTER, payload: undefined});
    // console.log(newState.sitters);
    expect( newState ).toEqual( afterStateShouldBe );
  });

  // it('should update a sitter object', () => {
  //   //1: create our initial state
  //   //2: use deep freeze
  //   //3: Expect the newly returned state from the reducer to have the modified sitter
  //   let state = SittersState.getEmptyState();
  //   state.sitters = TempDataService.getOriginalSitters();
    
  //   deepFreeze(state);
  //   const updatedSitterObject = {
  //     sitterId: '2', 
  //     email: 'sitter2@sitter.dk', 
  //     birthDate: new Date(1979, 1, 1), 
  //     gender: 'male', 
  //     firstname: 'Adam', 
  //     lastname: 'Antal', 
  //     education: 'PBA Web Development', 
  //     description: "I have two children", 
  //     location: 'Hillerød', 
  //     phone: '87654321',
  //     rating: [
  //       {
  //         parentId: 's1', 
  //         rating: 4, 
  //       }, 
  //       {
  //         parentId: 's2', 
  //         rating: 4, 
  //       }],
  //       schedule: undefined
  //     };

  //   let afterStateShouldBe = {isBaby: undefined, sitters: TempDataService.getOriginalSitters(), errorMessage: ''};
  //   afterStateShouldBe.sitters[1] = updatedSitterObject;

  //   let newState = sittersReducer(state, { type: types.SittersActions.UPDATE_SITTER, payload: updatedSitterObject});
  //   expect( newState ).toEqual( afterStateShouldBe );
  // });


});
