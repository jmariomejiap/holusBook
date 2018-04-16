import * as React from 'react';
import * as PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './RecipeStyle';

import { RecipeHeader as T } from '../types/appTypes'


export default class RecipeHeader extends React.Component<T.Props, {}> {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  constructor(props: T.Props) {
    super(props);

    // Actions
    this.onPressBtnLeft = this.onPressBtnLeft.bind(this);
  }

  /** Actions */
  
  onPressBtnLeft() {
    const navigation = this.props.navigation;
    const backAction = NavigationActions.back({
      key: null
    });

    navigation.dispatch(backAction);
  }

  render() {
    let iconName = `ios-heart${this.props.buttonState ? '' : '-outline'}`;
    let dynamicColor = this.props.buttonState ? { backgroundColor: 'orange' } : null;
    return (  
      <View style={styles.container}>
        <TouchableOpacity style={[styles.barButtons ]} onPress={this.onPressBtnLeft}>
          <View style={styles.buttonContainer}>
            <Image source={require('../../Assets/images/back_circle_button.png')} style={{ width: 40, height: 40 }}/>
          </View>
        </TouchableOpacity>
  
        <TouchableOpacity style={[styles.barButtons,  ]} onPress={this.props.onSelection}>
          <View style={[styles.buttonContainer, dynamicColor]}>
            <Ionicons name={iconName} size={20} color={this.props.buttonState ? 'white' : 'rgb(84, 96, 67)'} />
          </View>
        </TouchableOpacity>
      </View >
    );
  }
}
