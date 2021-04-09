import React from 'react';
import { shallow } from 'enzyme';
import { ScreenThree } from '../ScreenThree';
import { View } from 'react-native';
import { ScreenList } from '../../../components';

describe('Screen three Tests', () => {
  describe('rendering screen one', () => {
    const wrapper = shallow(
      <ScreenThree userName="userName" navigation={{}} />
    );

    it('should render view', () => {
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find(View).length).toEqual(2);
    });

    it('should render ScreenList component', () => {
      expect(wrapper.find(ScreenList).length).toEqual(3);
    });
  });
});
