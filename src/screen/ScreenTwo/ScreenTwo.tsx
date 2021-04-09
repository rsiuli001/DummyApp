import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Buttons, ScreenList } from '../../components';
import ScreenTwoStyles from './ScreenTwo.styles';
import * as ScreenName from '../../constants/screenName';
import * as Strings from '../../constants/strings';
import * as Colors from '../../constants/colors';

interface ScreenTwoProps {
  userName: String;
  navigation: any;
}

export const ScreenTwo: React.FC<ScreenTwoProps> = ({
  userName,
  navigation,
}): JSX.Element => {
  const onPress = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={ScreenTwoStyles.container}>
      <View style={ScreenTwoStyles.textContainer}>
        <Text style={ScreenTwoStyles.text}>
          {Strings.WELCOME} {userName}
        </Text>
      </View>

      <ScreenList
        text={`${Strings.NAVIGATE_TO} ${Strings.SCREEN_ONE}`}
        color={Colors.WHITE}
        onPress={onPress}
        screenName={ScreenName.SCREEN_ONE}
      />
      <ScreenList
        text={`${Strings.NAVIGATE_TO} ${Strings.SCREEN_TWO}`}
        color={Colors.WHITE}
        onPress={onPress}
        screenName={ScreenName.SCREEN_TWO}
      />
      <ScreenList
        text={`${Strings.NAVIGATE_TO} ${Strings.SCREEN_THREE}`}
        color={Colors.WHITE}
        onPress={onPress}
        screenName={ScreenName.SCREEN_THREE}
      />

      <Buttons></Buttons>
    </View>
  );
};

const mapStateToProps = (state: ScreenTwoProps) => ({
  userName: state.userName,
});

export default connect(mapStateToProps)(ScreenTwo);
