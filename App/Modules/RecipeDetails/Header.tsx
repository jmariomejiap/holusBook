import * as React from 'react';
import * as PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

// new icons
import Ionicons from 'react-native-vector-icons/Ionicons';

// Styles
import styles from './RecipeStyle';
// import { Colors } from '../../Themes';

// Interface
interface Props {
  navigation: any;
}

export default class RecipeHeader extends React.Component<Props, {}> {

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  constructor(props: any) {
    super(props);

    // Render Functions
    this.backButtonComp = this.backButtonComp.bind(this);
    this.favoriteButtonComp = this.favoriteButtonComp.bind(this);

    // Actions
    this.onPressTitle = this.onPressTitle.bind(this);
    this.onPressBtnLeft = this.onPressBtnLeft.bind(this);
    this.onPressBtnRight = this.onPressBtnRight.bind(this);
  }

  /** Actions */
  onPressTitle() {
    // TODO
  }

  onPressBtnLeft() {
    const navigation = this.props.navigation;
    const backAction = NavigationActions.back({
      key: null
    });

    navigation.dispatch(backAction);
  }

  onPressBtnRight() {
    // TODO
    
  }

  /** Render Functions */ // <Icon name='keyboard-arrow-left' size={25} color={'snow'} />
  backButtonComp() {
    return (
      <TouchableOpacity style={[styles.barButtons ]} onPress={this.onPressBtnLeft}>
        <View style={styles.buttonContainer}>
          <Image source={require('../../Assets/images/back_circle_button.png')} style={{ width: 40, height: 40 }}/>
        </View>
      </TouchableOpacity>
    );
  }

  favoriteButtonComp() {
    let focused = false;
    let iconName = `ios-heart${focused ? '' : '-outline'}`;
    return (
      <TouchableOpacity style={[styles.barButtons ]} onPress={this.onPressBtnRight}>
        <View style={styles.buttonContainer}>
          <Ionicons name={iconName} size={20} color={'snow'} />
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (  
      <View style={styles.container}>
        {this.backButtonComp()}
        
        {this.favoriteButtonComp()}
      </View >
    );
  }
}
