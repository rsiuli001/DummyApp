import React from 'react';
import { shallow } from 'enzyme';
import { TextInput, View } from 'react-native';
import { ScreenOne } from '../ScreenOne';
import { Banner, ScreenList } from '../../../components';

describe('Screen one Tests', () => {
  describe('rendering screen one', () => {
    const wrapper = shallow(<ScreenOne />);

    it('should render view', () => {
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find(View).length).toEqual(2);
    });

    it('should render Banner component', () => {
      expect(wrapper.find(Banner).length).toEqual(1);
    });

    it('should render ScreenList component', () => {
      expect(wrapper.find(ScreenList).length).toEqual(3);
    });

    it('should render TextInput component', () => {
      expect(wrapper.find(TextInput).length).toEqual(1);
    });
  });
});
