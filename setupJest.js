import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'react-native-gesture-handler/jestSetup';

global.fetch = require('jest-fetch-mock');

jest.mock('react-native-gesture-handler', () => {
  const Swipable = require('react-native-gesture-handler/mock-swipable');
  Swipable.default.call = () => {};
  return Swipable;
});

jest.mock('react-redux', () => {
  return {
    connect: (mapStateToProps, mapDispatchToProps) => (ReactComponent) => ({
      mapStateToProps,
      mapDispatchToProps,
      ReactComponent,
    }),
    Provider: ({ children }) => children,
  };
});

jest.mock('react-native-vector-icons/SimpleLineIcons', () => 'LineIcons');

Enzyme.configure({ adapter: new Adapter() });
