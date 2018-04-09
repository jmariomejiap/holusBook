import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import Header from '../../Comps/Header';
import styles from './FavoritesViewStyle';

// types
import { FavoritesView as T } from '../types/appTypes';


const { width } = Dimensions.get('window');

export default class FavoritesView extends React.Component<T.Props> {
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

  onClickNavigate() {
    this.props.navigation.navigate('RecipeDetails');
  }
  

  render() {
    return (
      <View style={styles.mainContainer}>
        <Header navigation={this.props.navigation} title={`Favorites View`} />
        <View>
          <TouchableOpacity onPress={this.onClickNavigate}>
            <View style={{ width: width, height: 150, backgroundColor: 'lightgrey', justifyContent: 'center', alignItems: 'center' }}>
              <Text>{`example favorite recipe ${width}`}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
