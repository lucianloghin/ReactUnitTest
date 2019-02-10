import React from 'react';
import ConfirmDialog from '../ConfirmDialog';
import renderer from 'react-test-renderer';
import ReactDOM from ''

test('test', () => {
  // cannot perform button click only using Jest
  // Enzyme can simulate click operations on shallow components

  /* As an alternative 
  you can use jQuery to emulate a click on the button
  $('#button').click();

  this will add extra dependencies like:
  const $ = require('jquery'); */

  const onConfirmMock = jest.fn();
  const onDismissMock = jest.fn();
  // const component = <ConfirmDialog
  //                     message="Test message"
  //                     confirmText="Confirm test"
  //                     onConfirm={() => onConfirmMock()}
  //                     onDismiss={() => onDismissMock()}/>
  // document.body.innerHTML = renderer.create(<ConfirmDialog
  //                                           message="Test message"
  //                                           confirmText="Confirm test"
  //                                           onConfirm={() => onConfirmMock()}
  //                                           onDismiss={() => onDismissMock()}/>);
  
  // const button = document.getElementById('confirmButton');
  
  // button.click();
  
  const props = {
    message: 'Test message',
    confirmText: 'Confirm test',
    onConfirm: onConfirmMock,
    onDismiss: onDismissMock
  };
  
  const sut = new ConfirmDialog(props);
  sut.componentWillMount();
  sut.handleConfirm();

  // the function was called at least once
  expect(onConfirmMock).toBeCalled();
  expect(onDismissMock).toBeCalled();
});