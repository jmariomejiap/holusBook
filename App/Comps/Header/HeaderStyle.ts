import { StyleSheet } from 'react-native';

import { ApplicationStyles, Colors, Fonts, Metrics } from '../../Themes/';

const objectStyle: any = {
  ...ApplicationStyles.screen,
  container: {
    ...ApplicationStyles.screen.centerElementsContainer,
    width: Metrics.screenWidth,
    height: Metrics.buttonHeight,
    backgroundColor: 'rgb(110, 119, 100)',// 'rgb(110, 119, 100)',// Colors.transparent,
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
