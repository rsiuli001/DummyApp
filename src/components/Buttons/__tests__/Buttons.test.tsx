import React from 'react';
import { shallow } from 'enzyme';
import { Text, TouchableOpacity, View } from 'react-native';
import { Buttons } from '../../';

describe('Buttons', () => {
  describe('rendering', () => {
    const wrapper = shallow(<Buttons />);
    it('renders the container view', () => {
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find(View).length).toEqual(4);
    });

    it('renders text', () => {
      expect(wrapper.find(Text).length).toEqual(5);
    });

    it('renders touchable opacity', () => {
      expect(wrapper.find(TouchableOpacity).length).toEqual(3);
    });
  });
});
