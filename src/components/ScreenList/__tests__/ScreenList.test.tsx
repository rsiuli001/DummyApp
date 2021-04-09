import { shallow } from 'enzyme';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ScreenList } from '../../';

describe('Screen List', () => {
  describe('rendering list', () => {
    const onPressEvent = jest.fn();
    const wrapper = shallow(
      <ScreenList
        text="screenName"
        color={'red'}
        onPress={onPressEvent}
        screenName="screenName"
      />
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
        <ScreenList
          text="screenName"
          color={'red'}
          onPress={onPressEvent}
          screenName="screenName"
        />
      );

      wrapper.find(TouchableOpacity).first().prop('onPress')!({} as any);
      expect(onPressEvent.mock.calls.length).toBe(1);
    });
  });
});
