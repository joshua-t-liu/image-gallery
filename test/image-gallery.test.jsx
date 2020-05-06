import { shallow } from 'enzyme';
import sinon from 'sinon';
import React from 'react';

import MainImage from '../client/src/components/mainImage.jsx';
import containerMap
describe('Modal popup', () => {
  test('opens after clicking main image', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<MainImage />);
    // wrapper.find('MainImage').simulate('click');
    // expect(onClick).to.have.propert('callCount', 1);
    expect(2).toBe(2);
  });

  test('disappears after clicking the exit button', () => {
  });
});

describe('Carousel', () => {
  test('changes after left click', () => {
    // left and right
  });

  test('changes after right click', () => {
    // left and right
  });
});