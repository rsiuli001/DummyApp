import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ScreenListStyles from './ScreenList.styles';

interface ScreenListProps {
  text: string;
  color: string;
  onPress(key: string): void;
  screenName: string;
}

const ScreenList: React.FC<ScreenListProps> = ({ text, color, onPress, screenName }) => {
  return (
    <View style={ScreenListStyles.container}>
      <TouchableOpacity onPress={() => onPress(screenName)}>
        <Text style={{ ...ScreenListStyles.navigationText, color }}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScreenList;
