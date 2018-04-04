import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

interface Props {
}


export default class Categories extends React.Component<Props> {
  render(){
    return (
      <View style={styles.categoriesContainer}>
        <Text style={styles.categorieText}>Category1</Text>
        <Text style={styles.categorieText}>Category2</Text>
        <Text style={styles.categorieText}>Category3</Text>
        <Text style={styles.categorieText}>Category4</Text>
        <Text style={styles.categorieText}>Category5</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  categoriesContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  categorieText: {
    fontSize: 40,
    backgroundColor: 'lightgrey',
  }
})