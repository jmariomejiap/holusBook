import * as React from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import Header from '../../Comps/Header';
import styles from './FavoritesViewStyle';

// types
import { FavoritesView as T, RecipeData } from '../types/appTypes';


export default class FavoritesView extends React.Component<T.Props> {
  constructor(props: any) {
    super(props);

    /** Bind Functions */

    // Actions
    this.onClickGoBack = this.onClickGoBack.bind(this);
    this.onClickNavigate = this.onClickNavigate.bind(this);
    this._renderItem = this._renderItem.bind(this);
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
  
  _keyExtractor = (item: any) => {
    return item.key;
  }

  _renderItem({item}: any) {
    return(
      <TouchableOpacity
        key={item.key}
        onPress={() => this.onClickNavigate(item)}     
      >
        <View style={styles.itemContainer}>
          <View>
            <Image source={{ uri: item.media[0]}} style={{ height: 75, width: 75 }}/>
          </View>
          <View style={styles.itemLabels}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemCategory}>{item.category}</Text>
          </View>        
        </View>      
      </TouchableOpacity>
    )
  }

  render() {
    const { favorites } = this.props;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'rgb(110, 119, 100)' }}>
        <View style={styles.mainContainer}>
          <Header navigation={this.props.navigation} title={`Favorites`} />
          <FlatList 
            data={favorites}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
          />
        </View>
      </SafeAreaView>
      
    );
  }
}
