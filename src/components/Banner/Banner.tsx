import React, { FC } from 'react';
import { Text, View } from 'react-native';
import * as Strings from '../../constants/strings';
import BannerStyle from './Banner.styles';

interface BannerProps {
  deviceType: boolean;
  styles: any;
}

const Banner: FC<BannerProps> = ({ deviceType, styles }): JSX.Element => {
  return (
    <View style={styles}>
      <Text style={BannerStyle.bannerText}>
        {Strings.DEVICE_LABEL} {deviceType ? Strings.SIMULATOR : Strings.PHYSICAL_DEVICE}
      </Text>
    </View>
  );
};

export default Banner;
