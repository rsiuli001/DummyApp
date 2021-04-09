import { StyleSheet } from 'react-native';
import * as Colors from '../../constants/colors';

const ScreenOneStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  input: {
    paddingLeft: 10,
    margin: 15,
    height: 40,
    borderWidth: 1,
  },
  userNameContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    fontWeight: '400',
    fontSize: 16,
  },
  deviceTypeContainer: {
    backgroundColor: Colors.LIGHT_BLUE,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ScreenOneStyle;
