import { shallow } from 'enzyme';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import ScreenList from '../ScreenList';

describe('Screen List', () => {
  describe('rendering list', () => {
    const onPressEvent = jest.fn();
    const wrapper = shallow(
      <ScreenList text="screenName" color="red" onPress={onPressEvent} screenName="screenName" />
    );

    it('should render the container view', () => {
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find(View).length).toEqual(1);
      expect(wrapper.find(TouchableOpacity).length).toEqual(1);
    });
  });

  describe('Interaction', () => {
    it('onPress event works', () => {
      const onPressEvent = jest.fn();
      const wrapper = shallow(
        <ScreenList text="screenName" color="red" onPress={onPressEvent} screenName="screenName" />
      );

      const button = wrapper.find(TouchableOpacity).first().props();
      if (button.onPress) {
        const onPressParam: any = {};
        button.onPress(onPressParam);
      }
      expect(onPressEvent.mock.calls.length).toBe(1);
    });
  });
});
