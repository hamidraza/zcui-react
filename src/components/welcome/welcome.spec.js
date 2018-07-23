import React from 'react';
import {shallow} from 'enzyme';
import Welcome from './welcome';

describe('Welcome with message', () => {
  const message = 'Hello World!';
  const wrapper = shallow(<Welcome message={message} />);

  test('check text', () => {
    expect(wrapper.text()).toEqual(message);
  });
});
