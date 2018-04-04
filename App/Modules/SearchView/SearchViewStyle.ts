import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Metrics } from '../../Themes';

const styles: any = {
  ...ApplicationStyles.screen,
  mainContainer: {
    ...ApplicationStyles.screen.mainContainer,
  },
  container: {
    ...ApplicationStyles.screen.mainContainer,
    ...ApplicationStyles.screen.centerElementsContainer,
    backgroundColor: Colors.whiteSmoke
  },
};

export default StyleSheet.create(styles);
