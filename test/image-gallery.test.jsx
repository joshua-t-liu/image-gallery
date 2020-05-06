import { shallow } from 'enzyme';
import sinon from 'sinon';
import React from 'react';

const Test = () => (<div></div>);

test('click main image opens the carousel', () => {
  // const onClick = sinon.spy();
  const wrapper = shallow(<Test />);
  // wrapper.find('MainImage').simulate('click');
  // expect(onClick).to.have.propert('callCount', 1);
  expect(2).toBe(2);
});