import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Metrics } from '../../Themes';

const styles: any = {
  mainContainer: {
    ...ApplicationStyles.screen.mainContainer,
    backgroundColor: 'rgb(250, 255, 240)',
  },
  wrapper: {
    marginTop: 10,
    marginBottom: 4,
    //marginLeft: 10,
    //marginRight: 10,
  },
  container: {
    flexDirection: 'column',
    height: 360,
    marginHorizontal: 10,
    backgroundColor: 'transparent',
  },
  pictureContainer: {
    height: 230,
    zIndex: 1,
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 1
    },
    shadowRadius: 3,
    shadowOpacity: 0.5, 
    backgroundColor: 'transparent',
  },
  picture: {
    height: 230,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  titleContainer: {
    marginHorizontal: 15,
    height: 130,
    backgroundColor: 'snow',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0.5
    },
    shadowRadius: 2,
    shadowOpacity: 0.5, 
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    //overflow: 'hiden',
  },
  text: {
    flex: 1,
    fontSize: 20,
    backgroundColor: 'snow',
    color: 'rgb(33, 56, 7)',
    paddingTop: 24,
    textAlign: 'center',
  }
};

export default StyleSheet.create(styles);
