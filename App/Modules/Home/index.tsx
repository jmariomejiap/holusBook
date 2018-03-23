import * as React from 'react';
import { Platform, Text, View, TouchableOpacity } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu',
});

interface Props {
  navigation: any;
  home: any;
  set_app_name: () => any;
}

// Styles
import styles from './HomeStyle';

export default class Home extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);

    /** Bind Functions */

    // Actions
    this.onClickNavigate = this.onClickNavigate.bind(this);
  }

  // Actions
  onClickNavigate() {
    this.props.navigation.navigate('SecondView');
  }

  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.welcome}>
          Welcome to React Native!
      </Text>
        <Text style={styles.instructions} >
          To get started, edit App.js
      </Text>
        <Text style={styles.instructions} >
          {instructions}
        </Text>
        <TouchableOpacity style={styles.buttonBase} onPress={this.onClickNavigate} >
          <Text>{`Navigate`}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
