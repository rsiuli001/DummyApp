import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as ScreenName from '../constants/screenName';
import * as String from '../constants/strings';
import { ScreenOne, ScreenTwo, ScreenThree } from '../screen';

const { Screen, Navigator } = createStackNavigator();

const MainStack: FC = (): JSX.Element => {
  return (
    <Navigator screenOptions={{ gestureEnabled: false }} initialRouteName={ScreenName.SCREEN_ONE}>
      <Screen
        name={ScreenName.SCREEN_ONE}
        component={ScreenOne}
        options={{ title: String.SCREEN_ONE }}
      />
      <Screen
        name={ScreenName.SCREEN_TWO}
        component={ScreenTwo}
        options={{ title: String.SCREEN_TWO }}
      />
      <Screen
        name={ScreenName.SCREEN_THREE}
        component={ScreenThree}
        options={{ title: String.SCREEN_THREE }}
      />
    </Navigator>
  );
};

export default MainStack;
