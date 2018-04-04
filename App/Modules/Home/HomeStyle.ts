import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Metrics, Fonts } from '../../Themes';

const styles: any = {
  ...ApplicationStyles.screen,
  container: {
    ...ApplicationStyles.screen.mainContainer,
    ...ApplicationStyles.screen.centerElementsContainer,
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: Fonts.size.h5,
    textAlign: 'center',
    margin: Metrics.baseMargin,
  },
  instructions: {
    textAlign: 'center',
    color: Colors.darkGray,
    marginBottom: Metrics.smallMargin,
  },
  buttonBase: {
    ...ApplicationStyles.screen.buttonBase,
    marginTop: Metrics.doubleBaseMargin
  }
};

export default StyleSheet.create(styles);
