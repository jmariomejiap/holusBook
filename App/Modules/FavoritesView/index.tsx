import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

// Libraries
import { NavigationActions } from 'react-navigation';

// App Modules
import Header from '../../Comps/Header';

// Styles
// import styles from './SecondViewStyle';

// Interface
interface Props {
  navigation: any;
}

const { width } = Dimensions.get('window');

export default class FavoritesView extends React.Component<Props, {}> {
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

const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
  container: { flex: 1, justifyContent: 'center' },
  buttonBase: { alignSelf: 'center' },
})