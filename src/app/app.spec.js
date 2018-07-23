import React from 'react';
import {shallow} from 'enzyme';
import App from './app';

describe('Welcome with message', () => {
  const wrapper = shallow(<App />);

  test('check text', () => {
    expect(wrapper.text()).toEqual('<Welcome />');
  });
});
