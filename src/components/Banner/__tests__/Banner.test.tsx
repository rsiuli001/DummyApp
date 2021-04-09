import React from 'react';
import { View, Text } from 'react-native';
import { shallow } from 'enzyme';
import { Banner } from '../..';

const bannerProps = {
  deviceType: true,
  styles: {},
};

describe('Banner', () => {
  describe('render banner', () => {
    const wrapper = shallow(
      <Banner deviceType={bannerProps.deviceType} styles={bannerProps.styles} />
    );

    it('should render the banner view', () => {
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find(View).length).toEqual(1);
    });

    it('should render the banner text', () => {
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find(Text).length).toEqual(1);
    });
  });
});
