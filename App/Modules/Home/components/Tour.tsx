import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

//import Swiper from 'react-native-swiper/src/';
const Swiper = require('react-native-swiper');


// Styles
import styles from '../HomeStyle';


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
          <Text style={styles.slideText}>First Tour Page</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.slideText}>Second Tip</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.slideText}>Last Tour</Text>
        </View>
      </Swiper>
    );
  }
}
