import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

//import Swiper from 'react-native-swiper/src/';
const Swiper = require('react-native-swiper');

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'grey',
    fontSize: 35,
    fontWeight: 'bold',
  }
})

interface Props {
  handleTour: () => any;
}


export default class Tour extends React.Component<Props> {
  render(){
    return (
      <Swiper 
        style={styles.wrapper}
        showsButtons={true}
        prevButton={
          <TouchableOpacity onPress={this.props.handleTour} >
            <Text>Skip</Text>
          </TouchableOpacity>
        }
        nextButton={<Text>Next ></Text>}
        buttonWrapperStyle={{backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'flex-end', position: 'absolute', top: 0, left: 0, flex: 1, paddingHorizontal: 15, paddingVertical: 15, justifyContent: 'space-between'}}
      >
        <View style={styles.slide1}>
          <Text style={styles.text}>First Tour Page</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Second Tip</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>Last Tour</Text>
        </View>
      </Swiper>
    );
  }
}

