import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

// Libraries
import { NavigationActions } from 'react-navigation';

// App Modules
import Header from '../../Comps/Header';

import styles from './RecipeStyle';


interface Props {
  navigation: any;

}

const { width } = Dimensions.get('window');

export default class Recipe extends React.Component<Props> {
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
  render(){
    return (
      <View style={styles.mainContainer}>      
        <Header navigation={this.props.navigation} title={``} />  
        <View style={[styles.picture, { width }]} />
        <Text style={styles.text}>PLACE HOLDER FOR RECIPE</Text>
        <Text style={styles.text}>description</Text>
      </View>
    );
  }
}
