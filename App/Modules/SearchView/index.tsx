import * as React from 'react';
import { TextInput, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SearchView as T, RecipeData } from '../types/appTypes'

import styles from './SearchViewStyle';


export default class SearchView extends React.Component<T.Props, {}> {
  constructor(props: T.Props) {
    super(props);

    /** Bind Functions */
    this._onClear = this._onClear.bind(this);
    this._onInputChange = this._onInputChange.bind(this);
    this._searchData = this._searchData.bind(this);
    // Actions
    
  }

  // Actions

  _searchData(data: Array<any>, searchInput: string) {
    return data.filter((objRecipe) => {
      const objRecipeTitle = objRecipe.title.toLowerCase();
      const text = searchInput.toLocaleLowerCase();
      return objRecipeTitle.includes(text);
    });
  }
  
  _onInputChange(text: string) {
    this.props.handleSearchInput(text);
  }

  _onClear() {
    this.props.handleSearchInput('');
  }

  _keyExtractor = (item: any) => {
    return item.key;
  }

  _renderItem({item}: any) {
    return(
      <View style={styles.itemContainer}>
        <View>
          <Image source={{ uri: item.media[0]}} style={{ height: 75, width: 75 }}/>
        </View>
        <View style={styles.itemLabels}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemCategory}>{item.category}</Text>
        </View>        
      </View>      
    )
  }


  render() {
    const { searchInput, allData } = this.props;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.searchBarContainer}>
          <View style={styles.searchBar}>
            <View style={styles.searchIcon}>
              <Ionicons name={'ios-search-outline'} size={22} color={'white'}/>
            </View>            
            <TextInput
              style={styles.textInput}
              onChangeText={this._onInputChange}
              placeholder='Search'
              placeholderTextColor='white'
              value={searchInput}/> 
            <TouchableOpacity
              onPress={this._onClear}
            >
              <View style={styles.clearIcon}>
                <Ionicons name={'ios-close'} size={35} color={'lightgrey'}/>
              </View>
            </TouchableOpacity>
          </View>          
        </View>
        <View style={{ flex: 1 }}>
          {(searchInput.length > 2 ) ?
            <FlatList 
              data={this._searchData(allData, searchInput)}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
            />
            : null            
          }          
        </View>
      </View>
        
    );
  }
}

/*
<TouchableOpacity style={styles.buttonBase} onPress={this.onClickGoBack}>
  <Text>{`Go back`}</Text>
</TouchableOpacity>
*/