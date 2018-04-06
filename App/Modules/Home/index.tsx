import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import  Tour from './components/Tour';
import CategoriesList from './components/Categories';

interface Props {
  navigation: any;
  home: any;
  tourState: boolean;
  soupData: any;
  appetizerData: any,
  dinnerData: any,
  saladData: any,
  dessertData: any,
  set_app_name: () => any;
  handleTourState: () => any;
  fetchData: () => any;
}

interface State {
  Mounted: boolean;
}

// Styles
import styles from './HomeStyle';

export default class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      Mounted: false,
    }

    /** Bind Functions */

    // Actions
  }

  static navigationOptions = {
    tabBarVisible: false
  };


  componentDidMount() {
    this.props.handleTourState();
    this.setState({ Mounted: true });
    this.props.fetchData();
  }

  shouldComponentUpdate(nextProps:any , nextState: any):any {
    if (this.state.Mounted && !nextProps.tourState) {
      this.redirect();
      return false;
    }
    return true;

  }

  // Actions
  redirect() {
    this.props.navigation.navigate('CategoriesList');
  }


  render() {
    return (
      <View style={styles.container} >
        {this.props.tourState && <Tour handleTour={this.props.handleTourState}/>}
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