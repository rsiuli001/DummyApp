import { StyleSheet } from 'react-native';
import * as Colors from '../../constants/colors';

const ButtonsStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 40,
    backgroundColor: Colors.BLACK,
  },
  text: {
    color: Colors.YELLOW,
  },
  buttonOne: {
    height: 40,
    width: '90%',
    marginTop: 20,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTwo: {
    height: 40,
    width: '90%',
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.GREY,
  },
  buttonThree: {
    height: 40,
    width: '90%',
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.LIGHT_BLUE,
  },
  swipeContainer: {
    width: '90%',
    height: 40,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderColor: Colors.LIGHT_BLUE,
    borderWidth: 0.5,
    alignItems: 'center',
  },
  swipeContent: {
    flexDirection: 'row',
  },
  swipeBox: {
    height: 40,
    width: 40,
    borderRadius: 10,
    backgroundColor: Colors.LIGHT_BLUE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  swipeTextContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonFour: {
    height: 40,
    width: '90%',
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftAction: {
    color: Colors.WHITE,
    paddingHorizontal: 10,
    fontWeight: '600',
  },
  textLightBlue: {
    color: Colors.LIGHT_BLUE,
    fontWeight: '600',
  },
  textWhite: {
    color: Colors.WHITE,
    fontWeight: '600',
  },
});

export default ButtonsStyle;
