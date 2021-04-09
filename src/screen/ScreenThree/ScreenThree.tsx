import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { ScreenList } from '../../components';
import ScreenThreeStyles from './ScreenThree.styles';
import * as ScreenName from '../../constants/screenName';
import * as Strings from '../../constants/strings';
import * as Colors from '../../constants/colors';

interface ScreenThreeProps {
  userName: string;
  navigation: any;
}

export const ScreenThree: FC<ScreenThreeProps> = ({
  userName,
  navigation,
}): JSX.Element => {
  const onPress = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={ScreenThreeStyles.container}>
      <View style={ScreenThreeStyles.textContainer}>
        <Text style={ScreenThreeStyles.text}>
          {Strings.WELCOME} {userName}
        </Text>
      </View>

      <ScreenList
        text={`${Strings.NAVIGATE_TO} ${Strings.SCREEN_ONE}`}
        color={Colors.BLACK}
        onPress={onPress}
        screenName={ScreenName.SCREEN_ONE}
      />
      <ScreenList
        text={`${Strings.NAVIGATE_TO} ${Strings.SCREEN_TWO}`}
        color={Colors.BLACK}
        onPress={onPress}
        screenName={ScreenName.SCREEN_TWO}
      />
      <ScreenList
        text={`${Strings.NAVIGATE_TO} ${Strings.SCREEN_THREE}`}
        color={Colors.BLACK}
        onPress={onPress}
        screenName={ScreenName.SCREEN_THREE}
      />
    </View>
  );
};

const mapStateToProps = (state: ScreenThreeProps) => ({
  userName: state.userName,
});

export default connect(mapStateToProps)(ScreenThree);
