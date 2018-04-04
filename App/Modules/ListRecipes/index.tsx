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
      >
        <View style={styles.container}>
          <View style={styles.picture} />
          <Text style={styles.text}>Title place holder {`${item.key}`}</Text>
        </View>
      </TouchableOpacity>
    );
  }  

  render(){
    return (
      <FlatList
        data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}]}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 15,
  },
  picture: {
    width,
    height: 140,
    backgroundColor: 'lightgrey',
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 30,
    backgroundColor: 'lightgrey',
  }
})