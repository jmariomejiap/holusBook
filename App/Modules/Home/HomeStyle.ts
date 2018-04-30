import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Metrics, Fonts } from '../../Themes';

const styles: any = {
  container: {
    ...ApplicationStyles.screen.mainContainer,
    backgroundColor: 'white',
  },
  slide: {
    ...ApplicationStyles.screen.mainContainer,
    flexDirection: 'column',
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  slideTitle: {
    color: 'rgb(73, 73, 54)',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 22,
    textAlign: 'center',
    fontFamily: 'CircularStd-Medium',
  },
  slideContent: {
    color: 'grey',
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'CircularStd-Book',
  },
  tourButtonWrapper : {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'flex-end',
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    paddingHorizontal: 35,
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  tourButton: {
    color: 'rgb(114, 135, 41)',
    fontFamily: 'CircularStd-Book',
    paddingRight: 5,
  },
  nextButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  activeDot: {
    backgroundColor: 'black',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  },
  categoriesContainer: {
    ...ApplicationStyles.screen.mainContainer,
    backgroundColor: 'rgb(94, 102, 85)',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingTop: 2,
  },
  touchableContainer: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 18,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 1,
    shadowOpacity: 1.0 
  },
  catImageContainer: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: 'hidden',
  },
  image: {
    height: 100,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  categorieText: {
    fontSize: 24,
    color: 'rgb(84, 83, 69)',
    backgroundColor: 'transparent',
    width: 120,
    fontFamily: 'CircularStd-Book',
  }
};

export default StyleSheet.create(styles);
