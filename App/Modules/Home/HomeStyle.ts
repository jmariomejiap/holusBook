import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Metrics, Fonts } from '../../Themes';

const styles: any = {
  container: {
    ...ApplicationStyles.screen.mainContainer,
    backgroundColor: 'white',
  },
  slide: {
    ...ApplicationStyles.screen.mainContainer,
    ...ApplicationStyles.screen.centerElementsContainer,
  },
  slideText: {
    color: 'grey',
    fontSize: 35,
    fontWeight: 'bold',
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
