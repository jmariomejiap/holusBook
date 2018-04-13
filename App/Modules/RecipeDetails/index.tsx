import * as React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';
import { RecipeDetailsView as T } from '../types/appTypes'

import { NavigationActions } from 'react-navigation'; // Libraries
import Header from './Header'; // Custom header
import styles from './RecipeStyle';


const { width } = Dimensions.get('window');

export default class Recipe extends React.Component<T.Props> {
  
  render() {
    const { recipe } = this.props.navigation.state.params;

    return (
      <View style={styles.mainContainer}>
        <Header navigation={this.props.navigation} />  
        <ScrollView>
          <Image source={{ uri: recipe.media[0]}} style={styles.image}/>
          <Text style={styles.recipeTitle}>{recipe.title}</Text>
          <View>
            <Text>place for icons</Text>
          </View>
          <View style={styles.descriptionText}>
            <Text style={styles.text}>{recipe.directions}</Text>      
          </View>
        </ScrollView>
      </View>
    );
  }
}
