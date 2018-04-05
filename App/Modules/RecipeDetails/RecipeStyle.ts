import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Metrics } from '../../Themes';

const styles: any = {
  mainContainer: {
    ...ApplicationStyles.screen.mainContainer,
    backgroundColor: 'white'
  },
  picture: {
    height: 180,
    backgroundColor: 'darkgrey',
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 20,
    marginTop: 20,
  }
};

export default StyleSheet.create(styles);
