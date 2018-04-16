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
  },
  slideContent: {
    color: 'grey',
    fontSize: 13,
    textAlign: 'center',
  },
  tourButtonWrapper : {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'flex-end',
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    justifyContent: 'space-between',
  },
  categoriesContainer: {
    ...ApplicationStyles.screen.mainContainer,
    backgroundColor: 'rgb(110, 119, 100)',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingTop: 10,
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
