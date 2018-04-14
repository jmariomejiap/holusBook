import * as React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';
import { RecipeDetailsView as T } from '../types/appTypes'

import Header from './Header'; // Custom header
import Indicators from './Indicators';
import ListDetailGen from './ListDetailGen';
import styles from './RecipeStyle';

const ParallaxScrollView = require('react-native-parallax-scroll-view');

const { width } = Dimensions.get('window');
const PARALLAX_HEADER_HEIGHT = 350;
const STICKY_HEADER_HEIGHT = 65;


export default class Recipe extends React.Component<T.Props> {
  
  render() {
    const { media, title, time, portions, directions, ingredients } = this.props.navigation.state.params.recipe;

    return (
      <View style={styles.mainContainer}>
        <Header navigation={this.props.navigation} />
        <ParallaxScrollView
          backgroundColor="rgb(84, 96, 67)"
          contentBackgroundColor="white"
          parallaxHeaderHeight={300}
          headerBackgroundColor="grey"
          stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
          backgroundSpeed={10}

          renderBackground={() => (
            <View key="background">
              <Image source={{uri: media[0], width, height: PARALLAX_HEADER_HEIGHT}}/>
              <View style={[styles.renderBackground, { height: PARALLAX_HEADER_HEIGHT }]}/>
            </View>
          )}
          renderForeground={() => (
            <View style={styles.renderForeground} />              
          )}          
          renderStickyHeader={() => (
            <View key="sticky-header" style={[styles.renderStickyHeader, { height: STICKY_HEADER_HEIGHT }]} />              
          )}>
          
          <ScrollView>            
            <Text style={styles.recipeTitle}>{title}</Text>
            <Indicators time={time} portions={portions}/>
            <ListDetailGen name={'Ingredients'} data={ingredients}/>
            <ListDetailGen name={'Directions'} data={directions} bigger={true}/>
          </ScrollView>            
        </ParallaxScrollView>

      </View>
    );
  }
}


