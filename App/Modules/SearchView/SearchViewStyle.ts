import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Metrics } from '../../Themes';

const styles: any = {
  mainContainer: {
    ...ApplicationStyles.screen.mainContainer,
    backgroundColor: 'white'
  },
  searchBarContainer: {
    width: Metrics.screenWidth,
    height: 90,
    backgroundColor: 'rgb(110, 119, 100)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Metrics.screenWidth - 40,
    height: 40,
    marginTop: 30,
    borderBottomColor: 'snow',
    borderBottomWidth: 0.7, 
  },
  searchIcon: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 30,
    height: 40
  },
  textInput: {
    flex: 1,
    height: 40,
    width: Metrics.screenWidth - 80,
    color: 'white'
  },
  clearIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30, height: 30
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
  }


};

export default StyleSheet.create(styles);
