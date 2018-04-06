import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

// Styles
import styles from '../HomeStyle';

interface Props {
  navigation: any;
}


export default class CategoriesList extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      Mounted: false,
    }
    this.onClickNavigate = this.onClickNavigate.bind(this);
  }

  onClickNavigate(name: string) {
    this.props.navigation.navigate('ListRecipes', { name });
  }

  render(){
    const categories = ['Soup', 'Appetizers','Dinner', 'Salads', 'Desserts'];
    return (
      <View style={styles.categoriesContainer}>
        {categories.map((cat) => {
          return (
            <TouchableOpacity
              key={cat}
              onPress={() => this.onClickNavigate(cat)}
            >
              <Text style={styles.categorieText}>{cat}</Text>
            </TouchableOpacity>
          );          
        })}
      </View>
    );
  }
}
