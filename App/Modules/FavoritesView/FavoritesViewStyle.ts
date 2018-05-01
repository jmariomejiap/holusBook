import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Metrics } from '../../Themes';

const styles: any = {
  mainContainer: {
    ...ApplicationStyles.screen.mainContainer,
    backgroundColor: 'white'
  },
  headerContainer: {
    ...ApplicationStyles.screen.centerElementsContainer,
    height: Metrics.buttonHeight,
    width: Metrics.screenWidth,
    backgroundColor: 'rgb(94, 102, 85)',
    paddingTop: Metrics.baseMargin
  },
  headerTitle: {
    ...ApplicationStyles.screen.baseTextTitle,
    color: Colors.snow,
    fontFamily: 'CircularStd-Book',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Metrics.screenWidth - 30,
    height: 80,
    marginTop: 10,
    paddingBottom: 10, 
    marginLeft: 15,
    marginRight: 15,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 0.7
  },
  itemLabels: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 12,
  },
  itemTitle: {
    fontFamily: 'CircularStd-Book',
    color: 'grey',
    fontSize: 13,
  },
  itemCategory: {
    fontFamily: 'CircularStd-Book',
    color: 'lightgrey',
    fontSize: 12,
  },
  noFavContainer: {
    flex: 1,
    ...ApplicationStyles.screen.centerElementsContainer,
  },
  noFavTextContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  noFavText: {
    fontFamily: 'CircularStd-Book',
    color: 'grey',
    fontSize: 16,
  }

};

export default StyleSheet.create(styles);
