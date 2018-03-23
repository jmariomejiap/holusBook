import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

// Libraries
import { NavigationActions } from 'react-navigation';

// App Modules
import Header from '../../Comps/Header';

// Styles
import styles from './SecondViewStyle';

// Interface
interface Props {
  navigation: any;
}

export default class SecondView extends React.Component<Props, {}> {
  constructor(props: any) {
    super(props);

    /** Bind Functions */

    // Actions
    this.onClickGoBack = this.onClickGoBack.bind(this);
  }

  // Actions
  onClickGoBack() {
    const backAction = NavigationActions.back({
      key: null
    });
    this.props.navigation.dispatch(backAction);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Header navigation={this.props.navigation} title={`Test Title`} />
        <View style={styles.container}>
          <TouchableOpacity style={styles.buttonBase} onPress={this.onClickGoBack}>
            <Text>{`Go back`}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}