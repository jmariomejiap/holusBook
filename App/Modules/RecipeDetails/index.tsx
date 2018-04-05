import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import styles from './RecipeStyle';


interface Props {
  
}

const { width } = Dimensions.get('window');

export default class Recipe extends React.Component<Props> {
  render(){
    return (
      <View style={styles.mainContainer}>        
        <View style={[styles.picture, { width }]} />
        <Text style={styles.text}>PLACE HOLDER FOR RECIPE</Text>
        <Text style={styles.text}>description</Text>
      </View>
    );
  }
}
