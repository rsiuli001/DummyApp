import React, { FC, useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Banner, ScreenList } from '../../components';
import * as ActionTypes from '../../constants/actionTypes';
import * as ScreenName from '../../constants/screenName';
import * as Strings from '../../constants/strings';
import * as Colors from '../../constants/colors';
import CustomModule from '../../native-modules';
import ScreenOneStyle from './ScreenOne.styles';

interface StateProp {
  userName: string;
}

interface DispatchProp {
  addUser: (userName: string) => any;
}

export const ScreenOne: FC<any> = ({ navigation, userName, addUser }: any): JSX.Element => {
  const [isSimulator, setIsSimulator] = useState(null);

  useEffect(() => {
    CustomModule.getDeviceType((deviceType: any) => {
      setIsSimulator(deviceType);
    });
  }, []);

  const onPress = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={ScreenOneStyle.container}>
      <Banner deviceType={isSimulator || false} styles={ScreenOneStyle.deviceTypeContainer} />
      <View style={ScreenOneStyle.userNameContainer}>
        <Text style={ScreenOneStyle.text}>
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

      <TextInput
        style={ScreenOneStyle.input}
        value={userName}
        onChangeText={(text) => addUser(text)}
        placeholder={Strings.ENTER_NAME}
      />
    </View>
  );
};

const mapStateToProps = ({ userName }: StateProp) => {
  return {
    userName,
  };
};

const mapDispatchToProps = (dispatch: any): DispatchProp => {
  return {
    addUser: (userName: string) => dispatch({ type: ActionTypes.ADD_USER, payload: { userName } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScreenOne);
