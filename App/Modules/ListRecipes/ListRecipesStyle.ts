import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Metrics } from '../../Themes';

const styles: any = {
  mainContainer: {
    ...ApplicationStyles.screen.mainContainer,
    backgroundColor: 'rgb(250, 252, 247)', //'rgb(250, 255, 240)',
  },
  wrapper: {
    marginTop: 10,
    marginBottom: 4,
  },
  container: {
    flexDirection: 'column',
    height: 360,
    marginHorizontal: 10,
    backgroundColor: 'transparent',
  },
  pictureContainer: {
    height: 230,
    width: Metrics.screenWidth,
    zIndex: 1,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 1
    },
    shadowRadius: 3,
    shadowOpacity: 0.3, 
    backgroundColor: 'transparent',
  },
  picture: {
    height: 230,
    width: Metrics.screenWidth - 20
  },
  titleContainer: {
    justifyContent: 'space-around',
    marginHorizontal: 15,
    height: 130,
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0.5
    },
    shadowRadius: 2,
    shadowOpacity: 0.2, 
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    //overflow: 'hiden',
  },
  text: {
    fontSize: 18,
    color: 'rgb(33, 56, 7)',
    paddingTop: 24,
    textAlign: 'center',
  }
};

export default StyleSheet.create(styles);
