import { StyleSheet } from 'react-native';
import * as Colors from '../../constants/colors';

const ScreenTwoStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.BLACK,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontWeight: '400',
    fontSize: 16,
    color: Colors.WHITE,
  },
});

export default ScreenTwoStyles;
