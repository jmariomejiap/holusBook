import * as React from 'react';
import * as PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

// Styles
import styles from './HeaderStyle';
import { Colors } from '../../Themes';

// Interface
interface Props {
  navigation: any;
  title: string;
}

export default class Header extends React.Component<Props, {}> {

  static propTypes = {
    navigation: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired
  };

  constructor(props: any) {
    super(props);

    // Render Functions
    this.buildHeaderLeft = this.buildHeaderLeft.bind(this);
    this.buildHeaderRight = this.buildHeaderRight.bind(this);

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

  /** Render Functions */
  buildHeaderLeft() {

    return (
      <TouchableOpacity style={styles.barButtons} onPress={this.onPressBtnLeft}>
        <Icon name='ios-arrow-back-outline' size={25} color={Colors.snow} />
      </TouchableOpacity>
    );
  }

  buildHeaderRight() {
    return (
      <TouchableOpacity style={styles.barButtons} onPress={this.onPressBtnRight}>

      </TouchableOpacity>
    );
  }

  render() {
    const title = this.props.title.toLocaleUpperCase();

    return (
      <View style={styles.container}>
        {this.buildHeaderLeft()}
        <TouchableOpacity onPress={this.onPressTitle}>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
        {this.buildHeaderRight()}
      </View >
    );
  }
}
