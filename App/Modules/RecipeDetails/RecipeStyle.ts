import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Metrics } from '../../Themes';

const styles: any = {
  mainContainer: {
    ...ApplicationStyles.screen.mainContainer,
    backgroundColor: 'white'
  },
  container: { // barNav
    ...ApplicationStyles.screen.centerElementsContainer,
    width: Metrics.screenWidth,
    height: Metrics.buttonHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 1,
    marginTop: 10,
  },
  barButtons: {
    ...ApplicationStyles.screen.centerElementsContainer,
    height: Metrics.buttonHeight,
    overflow: 'hidden',
    width: Metrics.buttonBarWidth, // gives padding sides
  },
  image: {
    width: Metrics.screenWidth,
    height: 320,
  },
  recipeTitle: {
    fontSize: 24,
    textAlign: 'center',
    height: 110,
    paddingTop: 15,
    color: 'rgb(90, 100, 80)'
  },
  descriptionText: {
    flex: 1,
    backgroundColor: 'lightblue',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  text: {
    fontSize: 16,
    marginTop: 20,
    color: 'rgb(70, 80, 60)'
  },
  buttonContainer: {
    backgroundColor: 'rgba(250, 250, 250, 0.6)',
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    shadowColor: '#202020',//'#000000',
    shadowOffset: {
      width: 1,
      height: 2//0.5
    },
    shadowRadius: 3,
    shadowOpacity: 0.5,
  }
};

export default StyleSheet.create(styles);
