import React from 'react';
import { shallow } from 'enzyme';
import { ScreenTwo } from '../ScreenTwo';
import { View } from 'react-native';
import { Buttons, ScreenList } from '../../../components';

describe('Screen two Tests', () => {
  describe('rendering screen two', () => {
    const wrapper = shallow(<ScreenTwo userName="aa" navigation={{}} />);

    it('should render view', () => {
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find(View).length).toEqual(2);
    });

    it('should render Buttons component', () => {
      expect(wrapper.find(Buttons).length).toEqual(1);
    });

    it('should render ScreenList component', () => {
      expect(wrapper.find(ScreenList).length).toEqual(3);
    });
  });
});
