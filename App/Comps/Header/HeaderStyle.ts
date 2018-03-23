import { StyleSheet } from 'react-native';

import { ApplicationStyles, Colors, Fonts, Metrics } from '../../Themes/';

const objectStyle: any = {
  ...ApplicationStyles.screen,
  container: {
    ...ApplicationStyles.screen.centerElementsContainer,
    width: Metrics.screenWidth,
    height: Metrics.buttonHeight,
    backgroundColor: Colors.black,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: Metrics.baseMargin
  },
  barButtons: {
    ...ApplicationStyles.screen.centerElementsContainer,
    height: Metrics.buttonHeight,
    overflow: 'hidden',
    width: Metrics.buttonBarWidth
  },
  title: {
    ...ApplicationStyles.screen.baseTextTitle,
    color: Colors.snow
  }
};

export default StyleSheet.create(objectStyle);
