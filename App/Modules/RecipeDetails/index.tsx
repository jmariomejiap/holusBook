import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

interface Props {

}

const { width } = Dimensions.get('window');

export default class Recipe extends React.Component<Props> {
  render(){
    return (
      <View style={styles.container}>        
        <View style={styles.picture} />
        <Text style={styles.text}>PLACE HOLDER FOR RECIPE</Text>
        <Text style={styles.text}>description</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  picture: {
    width,
    height: 180,
    backgroundColor: 'darkgrey',
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 20,
    marginTop: 20,
  }
})