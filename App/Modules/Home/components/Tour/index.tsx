import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';
import { Tour as T } from '../../../types/appTypes';
import styles from '../../HomeStyle';

//import Swiper from 'react-native-swiper/src/';
const Swiper = require('react-native-swiper');


const { width } = Dimensions.get('window');

interface State {
  currentIndex: number;
}

export default class Tour extends React.Component<T.Props, State> {
  static navigationOptions = {
    tabBarVisible: false
  };
  constructor(props:T.Props) {
    super(props);
    this.state = {
      currentIndex: 0
    }
  }


  _onSkip = () => {
    this.props.handleTourState();
    this.props.navigation.navigate('Home');
  }

  _onNext = (index:any) => {
    if (index === 0 && this.state.currentIndex === 2) {
      return this._onSkip();
    }
    this.setState({ currentIndex: index });
  } 

  render(){
    return (
      <Swiper 
        showsButtons={true}
        loop={true}
        index={0}
        prevButton={
          <TouchableOpacity onPress={this._onSkip} >
            <Text style={styles.tourButton}>Skip</Text>
          </TouchableOpacity>
        }
        nextButton={<Text style={styles.tourButton}>Next ></Text>}
        buttonWrapperStyle={styles.tourButtonWrapper}
        activeDot={<View style={styles.activeDot} />}
        onIndexChanged={this._onNext}
      >
        <View style={styles.slide}>
          <View >
            <Image
              source={require('../../../../Assets/tourImages/healthy.png')}
              style={{ width, height: 380}}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.slideTitle}>It's Healthier...</Text>
            <Text style={styles.slideContent}>Vegetarian diets are not just nutritionally sound, but have many health benefits that can help prevent and manage a number of increasingly common diseases and conditions.</Text>
          </View>  
        </View>
        <View style={styles.slide}>
          <View>
            <Image
              source={require('../../../../Assets/tourImages/greener.png')}
              style={{ width, height: 380}}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.slideTitle}>It's Greener...</Text>
            <Text style={styles.slideContent}>Did you know that animal agriculture is responsible for 18% of global climate change? </Text>
            <Text style={styles.slideContent}>Want to help the environment? Replace animal products like red meat and dairy with plant-based alternatives like chickpeas and soy milk. Even a small change can make a real difference for the planet.</Text>
          </View>
        </View>
        <View style={styles.slide}>
          <View>
            <Image
              source={require('../../../../Assets/tourImages/compassion.png')}
              style={{ width, height: 380}}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.slideTitle}>It's Compassionate...</Text>
            <Text style={styles.slideContent}>Throughout history, many people have chosen to expand their circle of compassion to encompass domestic animals such as dogs and cats.</Text>
            <Text style={styles.slideContent}>Becoming vegetarian or vegan has a clear impact on animal suffering. 100,000+ vegetarians reduce the demand for meat by approximately 2.5 million chickens, pigs, cows, and sheep each year. </Text>
          </View>
        </View>
      </Swiper>
    );
  }
}
