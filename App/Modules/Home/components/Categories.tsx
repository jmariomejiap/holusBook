import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

interface Props {
  onPress: () => any;
}


export default class CategoriesList extends React.Component<Props> {
  render(){
    const categories = ['category1', 'category2','category3', 'category4', 'category5'];
    return (
      <View style={styles.categoriesContainer}>
        {categories.map((cat) => {
          return (
            <TouchableOpacity
              key={cat}
              style={{ backgroundColor: 'lightgreen'}}
              onPress={this.props.onPress}
            >
              <Text style={styles.categorieText}>{cat}</Text>
            </TouchableOpacity>
          );          
        })}
        
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