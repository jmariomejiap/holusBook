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
    flexDirection: 'column',
    justifyContent: 'space-around',

  },
  categorieText: {
    fontSize: 24,
    backgroundColor: 'lightgrey',
  }
};

export default StyleSheet.create(styles);
