import * as React from 'react';
import {
  Text,
  View,
  FlatList
} from 'react-native';
import { RecipeDetailsView as T } from '../types/appTypes'

import styles from './RecipeStyle';


interface Props {
  name: string;
  data: Array<string>;
  bigger?: boolean;
}

export default class ListDetailsGen extends React.Component<Props> {
  
  _getData(name: string, data: Array<string>) {
    return data.map((ingr: string , index: number) => { 
      return {
        key: `${name}${index}`,
        ingr,
      };
    });
  }

  _keyExtractor = (item: any) => {
    return item.key;
  }

  _renderItem = ({item}: any) => {
    const biggerFont = this.props.bigger ? { fontSize: 15 } : null;

    return (
      <Text style={[styles.ingredientText, biggerFont ]}>{`\u2022 ${item.ingr}`}</Text>
    );
  }  

  render() {
    const { name, data } = this.props;
    return (
      <View style={styles.ingredientsMainContainer}>
        <Text style={styles.ingredientsTitle}>{`${name}:`}</Text>
        <View style={styles.ingredientsContainer}>
          <FlatList
            data={this._getData(name, data)}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
          />
        </View>
        
      </View>
    );
  }
}
