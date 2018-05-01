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
import Icons from 'react-native-vector-icons/Ionicons';
import styles from './FavoritesViewStyle';

// types
import { FavoritesView as T, RecipeData } from '../types/appTypes';


export default class FavoritesView extends React.Component<T.Props> {
  constructor(props: any) {
    super(props);

    this.onClickNavigate = this.onClickNavigate.bind(this);
    this._renderItem = this._renderItem.bind(this);
  }


  // optional Render when no favorites selected.
  noFavorites = () => (
    <View style={styles.noFavContainer} >
      <Icons name={'ios-book-outline'} size={55} color={'grey'}/>
      <View style={styles.noFavTextContainer}>
        <Text style={styles.noFavText}>Your Favorites Book...</Text>
        <Text style={styles.noFavText}>is empty</Text>
        <Text style={styles.noFavText}>Go ahead, find some great recipes!</Text>
      </View>      
    </View>
  );


  // Actions to navigate to see a recipe.
  onClickNavigate(recipe: RecipeData) {
    this.props.navigation.navigate('RecipeDetails', { recipe });
  }
  
  _keyExtractor = (item: any) => {
    return item.key;
  }

  // render favorite component.
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
      <SafeAreaView style={{ flex: 1, backgroundColor: 'rgb(94, 102, 85)' }}>
        <View style={styles.mainContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>FAVORITES</Text>
          </View>
          {(favorites.length === 0) ?
            this.noFavorites()
            :
            <FlatList 
              data={favorites}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
            />
          }          
        </View>
      </SafeAreaView>
      
    );
  }
}
