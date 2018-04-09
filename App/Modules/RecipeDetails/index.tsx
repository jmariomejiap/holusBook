import * as React from 'react';
import {
  Text,
  View,
  Dimensions
} from 'react-native';
import { NavigationProps as Props } from '../types/appTypes'

import { NavigationActions } from 'react-navigation'; // Libraries
import Header from '../../Comps/Header'; // App Modules
import styles from './RecipeStyle';


const { width } = Dimensions.get('window');

export default class Recipe extends React.Component<Props> {
  
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
