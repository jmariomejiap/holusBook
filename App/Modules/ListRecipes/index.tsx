import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity
} from 'react-native';

// Libraries
import { NavigationActions } from 'react-navigation';

// App Modules
import Header from '../../Comps/Header';


import styles from './ListRecipesStyle';

interface Props {
  navigation: any;
}

const { width } = Dimensions.get('window');

export default class ListRecipes extends React.Component<Props> {
  constructor(props: any) {
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

  onClickNavigate(){
    this.props.navigation.navigate('RecipeDetails');
  }
  _keyExtractor = (item: any) => {
    console.log('keyExractor = ', item.key);  
    return item.key;
  }

  _renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        key={item.key}    
        onPress={this.onClickNavigate}     
        style={styles.wrapper}   
      >
        <View style={styles.container}>
          <View style={[styles.picture, { width }]} />
          <Text style={styles.text}>Title place holder recipe {`${item.key}`}</Text>
        </View>
      </TouchableOpacity>
    );
  }  

  render(){
    const { name } = this.props.navigation.state.params;

    return (
      <View style={styles.mainContainer}>
        <Header navigation={this.props.navigation} title={name} />
        <FlatList
          data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}]}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />      
      </View>
      
    );
  }
}
