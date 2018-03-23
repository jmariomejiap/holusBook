import { StackNavigator } from 'react-navigation';

import Home from '../Modules/Home/HomeScene';
import SecondView from '../Modules/SecondView/SecondViewScene';

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    Home: {
      screen: Home
    },
    SecondView: {
      screen: SecondView
    }
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'Home',
    // Uncomment for disable swipe back
    /** navigationOptions: { gesturesEnabled: false }, */
  });

export default PrimaryNav;
