import * as React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import { RecipeDetailsView as T } from '../types/appTypes'

import Header from './Header'; // Custom header
import Indicators from './Indicators';
import ListDetailGen from './ListDetailGen';
import styles from './RecipeStyle';




export default class Recipe extends React.Component<T.Props> {
  
  render() {
    const { media, title, time, portions, directions, ingredients } = this.props.navigation.state.params.recipe;

    return (
      <View style={styles.mainContainer}>
        <Header navigation={this.props.navigation} />  
        <ScrollView>
          <Image source={{ uri: media[0]}} style={styles.image}/>
          <Text style={styles.recipeTitle}>{title}</Text>
          <Indicators time={time} portions={portions}/>
          <ListDetailGen name={'Ingredients'} data={ingredients}/>
          <ListDetailGen name={'Directions'} data={directions} bigger={true}/>
        </ScrollView>
      </View>
    );
  }
}
