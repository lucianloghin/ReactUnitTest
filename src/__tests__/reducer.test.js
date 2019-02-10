import { messages } from "../reducer.js";
import { DISMISS_MESSAGE, ADD_MESSAGE } from '../actionTypes';

test('Message is added to state', () => {
  // arrange
  const message = 'test message';
  const action = {
                   type: ADD_MESSAGE,
                   message: message
                 };
  const expectedState = [ message ];

  // act
  const newState = messages([], action);

  // assert
  expect(newState).toEqual(expectedState);
})

test('Message is removed from state', () => {
  // arrange
  const message = 'test message';
  const action = {
                   type: DISMISS_MESSAGE,
                   message: message
                 };
  const initialState = [ message ];

  // act
  const newState = messages(initialState, action);

  // assert
  expect(newState).toEqual([]);
})