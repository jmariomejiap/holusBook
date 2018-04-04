import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import  Tour from './components/Tour';
import Categories from './components/Categories';

interface Props {
  navigation: any;
  home: any;
  tourState: boolean;
  set_app_name: () => any;
  handleTourState: () => any;
}

// Styles
import styles from './HomeStyle';

export default class Home extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);

    /** Bind Functions */

    // Actions
    this.onClickNavigate = this.onClickNavigate.bind(this);
  }

  componentDidMount() {
    this.props.handleTourState();
  }

  // Actions
  onClickNavigate() {
    this.props.navigation.navigate('SecondView');
  }

  render() {
    return (
      <View style={styles.container} >
        {this.props.tourState ?
          <Tour handleTour={this.props.handleTourState}/> :
          <Categories />
        }
      </View>
    );
  }
}



/*
<Text style={styles.instructions} >
          To get started, edit App.js
      </Text>
        <Text style={styles.instructions} >
          {instructions}
        </Text>
        <TouchableOpacity style={styles.buttonBase} onPress={this.onClickNavigate} >
          <Text>{`Navigate`}</Text>
        </TouchableOpacity>

*/