import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity
} from 'react-native';

interface Props {
  navigation: any;
}

const { width } = Dimensions.get('window');

export default class ListRecipes extends React.Component<Props> {

  onClickNavigate = () => {
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
          <View style={styles.picture} />
          <Text style={styles.text}>Title place holder recipe {`${item.key}`}</Text>
        </View>
      </TouchableOpacity>
    );
  }  

  render(){
    return (
      <View style={styles.mainContainer}>
        <FlatList
          data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}]}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />      
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: { backgroundColor: 'white' },
  wrapper: { marginBottom: 20 },
  container: {
    flexDirection: 'column',
    height: 160,
  },
  picture: {
    width,
    height: 143,
    backgroundColor: 'lightgrey',
  },
  text: {
    fontSize: 16,
    backgroundColor: 'snow',
  }
})