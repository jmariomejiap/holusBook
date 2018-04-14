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
  renderBackground: {
    position: 'absolute',
    top: 0,
    width: Metrics.screenWidth,
  },
  renderForeground: {
    height: 300,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  renderStickyHeader: {
    width: 300,
    justifyContent: 'flex-end',
  },
  recipeTitle: {
    fontSize: 24,
    textAlign: 'center',
    paddingVertical: 40,
    color: 'rgb(90, 100, 80)',
    fontFamily: 'HoeflerText-Regular',
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
  },
  indicatorMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  indicatorIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 95
  },
  indicatorIcon: { 
    width: 28,
    height: 28,
    backgroundColor: 'rgb(154, 174, 87)',
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center'
  },
  indicatorText: {
    fontFamily: 'HoeflerText-Regular',
    fontSize: 14,
  },
  ingredientsMainContainer: {
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  ingredientsTitle: {
    fontFamily: 'CircularStd-Book',
    fontSize: 14,
  },
  ingredientsContainer: {
    padding: 10,
  },
  ingredientText: {
    fontFamily: 'HoeflerText-Regular',
    fontSize: 13,
    padding: 5,
  }

};

export default StyleSheet.create(styles);
