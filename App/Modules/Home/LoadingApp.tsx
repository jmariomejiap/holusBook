import * as React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

class LoadingScreen extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      tourTaken: false,
    }
    this._showTour();
  }

  // determines SwitchNavigation
  _showTour = async () => {
    console.log('Loading screen props = ', this.props);
  
    // This will switch to the App screen or Tour screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(this.state.tourTaken ? 'App' : 'Tour');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View >
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
export default LoadingScreen