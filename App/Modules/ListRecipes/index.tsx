import * as React from 'react';
import {
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import { ListRecipesView as T, RecipeData } from '../types/appTypes'

import { NavigationActions } from 'react-navigation'; // Libraries
import Header from '../../Comps/Header';
import styles from './ListRecipesStyle';


const { width } = Dimensions.get('window');

export default class ListRecipes extends React.Component<T.Props> {
  constructor(props: T.Props) {
    super(props);

    /** Bind Functions */

    // Actions
    this.onClickGoBack = this.onClickGoBack.bind(this);
    this.onClickNavigate = this.onClickNavigate.bind(this);
  }

  // Actions
  onClickGoBack() {
    const backAction = NavigationActions.back({
      key: null
    });
    this.props.navigation.dispatch(backAction);
  }


  onClickNavigate(recipe: RecipeData) {
    this.props.navigation.navigate('RecipeDetails', { recipe });
  }


  _selectData(currentCategory: string) {
    const { soups, appetizers, dinner, salads, desserts } = this.props;
    switch (currentCategory) {
      case 'Soups':
        return soups;    
      
      case 'Appetizers':
        return appetizers;    
      
      case 'Dinner':
        return dinner;    
      
      case 'Salads':
        return salads;   
       
      case 'Desserts':
        return desserts;    

      default:
        break;
    }
  }

  _keyExtractor = (item: any) => {
    return item.key;
  }

  _renderItem = ({item}: any) => (
    <TouchableOpacity
      key={item.key}    
      onPress={() => this.onClickNavigate(item)}     
      style={styles.wrapper}   
    >
      <View style={styles.container}>
        <View style={styles.pictureContainer}>
          <Image source={{ uri: item.media[0]}} style={[styles.picture, { width: width - 20 }]}/>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>{`${item.title}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  ) 



  render(){
    const { navigation } = this.props;
    const { name } = navigation.state.params;

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'rgb(110, 119, 100)' }}>
        <View style={styles.mainContainer}>
          <Header navigation={navigation} title={name} />
          <FlatList
            data={this._selectData(name)}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
          />      
        </View>
      </SafeAreaView>
      
    );
  }
}
