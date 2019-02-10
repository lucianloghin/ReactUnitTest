import React from 'react';
import AlertDismissable from "../AlertDismissable";
import renderer from 'react-test-renderer';

test('Alert is rendered correctly', () => {
  const component = renderer
                      .create(
                              <AlertDismissable 
                                title='Error'
                                show={true}
                                message='Unexpected error'
                                dismissText='Close'/>)
                      .toJSON();

  expect(component).toMatchSnapshot();
});

