import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

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

export default class ThirdView extends React.Component<Props, {}> {
  constructor(props: any) {
    super(props);

    /** Bind Functions */

    // Actions
    this.onClickGoBack = this.onClickGoBack.bind(this);
  }

  // Actions
  onClickGoBack() {
    const backAction = NavigationActions.back({
      key: null
    });
    this.props.navigation.dispatch(backAction);
  }


  onClickNavigate() {
    this.props.navigation.navigate('ListRecipes');
  }
  
  

  render() {
    return (
      <View style={styles.mainContainer}>
        <Header navigation={this.props.navigation} title={`Favorites View`} />
        <View style={styles.container}>
          <TouchableOpacity style={styles.buttonBase} onPress={this.onClickNavigate}>
            <View style={{ width: 300, height: 150, backgroundColor: 'lightgrey' }}>
              <Text>{`example favorite`}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBase} onPress={this.onClickGoBack}>
            <Text style={{ marginTop: 40 }}>{`Go back`}</Text>
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