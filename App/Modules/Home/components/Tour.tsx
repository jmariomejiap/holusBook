import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';

//import Swiper from 'react-native-swiper/src/';
const Swiper = require('react-native-swiper');


// Styles
import styles from '../HomeStyle';

const { width } = Dimensions.get('window');

interface Props {
  handleTour: () => any;
}


export default class Tour extends React.Component<Props> {
  render(){
    return (
      <Swiper 
        showsButtons={true}
        prevButton={
          <TouchableOpacity onPress={this.props.handleTour} >
            <Text>Skip</Text>
          </TouchableOpacity>
        }
        nextButton={<Text>Next ></Text>}
        buttonWrapperStyle={styles.tourButtonWrapper}
      >
        <View style={styles.slide}>
          <View >
            <Image
              source={require('./images/edgar-castrejon-459822-unsplash.jpg')}
              style={{ width, height: 350}}
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
              source={require('./images/aaron-burden-363695-unsplash.jpg')}
              style={{ width, height: 350}}
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
              source={require('./images/baptist-standaert-346832-unsplash.jpg')}
              style={{ width, height: 350}}
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
