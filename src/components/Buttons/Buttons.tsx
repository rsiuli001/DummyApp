import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Swipable from 'react-native-gesture-handler/Swipeable';
import * as String from '../../constants/strings';
import * as Colors from '../../constants/colors';
import LineIcons from 'react-native-vector-icons/SimpleLineIcons';
import ButtonStyles from './Buttons.styles';

const Buttons: React.FC = (): JSX.Element => {
  const renderButtonTypeOne = () => {
    return (
      <TouchableOpacity style={ButtonStyles.buttonOne}>
        <Text style={ButtonStyles.textLightBlue}>{String.PRESS_ME}</Text>
      </TouchableOpacity>
    );
  };

  const renderButtonTypeTwo = () => {
    return (
      <TouchableOpacity style={ButtonStyles.buttonTwo}>
        <Text style={ButtonStyles.textLightBlue}>{String.PRESS_ME}</Text>
      </TouchableOpacity>
    );
  };

  const renderButtonTypeThree = () => {
    return (
      <TouchableOpacity style={ButtonStyles.buttonThree}>
        <Text style={ButtonStyles.textWhite}>{String.PRESS_ME}</Text>
      </TouchableOpacity>
    );
  };

  const renderSwipeLeftAction = () => {
    return (
      <View style={ButtonStyles.buttonFour}>
        <Text style={ButtonStyles.leftAction}>{String.SCREEN_SWIPED}</Text>
      </View>
    );
  };

  const renderButtonTypeFour = () => {
    return (
      <Swipable
        containerStyle={ButtonStyles.swipeContainer}
        renderLeftActions={renderSwipeLeftAction}
      >
        <View style={ButtonStyles.swipeContent}>
          <View style={ButtonStyles.swipeBox}>
            <LineIcons
              name="diamond"
              size={20}
              color={Colors.WHITE}
            ></LineIcons>
          </View>

          <View style={ButtonStyles.swipeTextContainer}>
            <Text style={ButtonStyles.textWhite}>
              {String.SWIPE_TO_CONTINUE}
            </Text>
          </View>
        </View>
      </Swipable>
    );
  };

  return (
    <View style={ButtonStyles.container}>
      <Text style={ButtonStyles.text}>{String.BUTTON_VARIANT}</Text>
      {renderButtonTypeOne()}
      {renderButtonTypeTwo()}
      {renderButtonTypeThree()}
      {renderButtonTypeFour()}
    </View>
  );
};

export default Buttons;
