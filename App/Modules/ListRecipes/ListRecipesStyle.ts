import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Metrics } from '../../Themes';

const styles: any = {
  mainContainer: {
    ...ApplicationStyles.screen.mainContainer,
    backgroundColor: 'white'
  },
  wrapper: {
    marginBottom: 20
  },
  container: {
    flexDirection: 'column',
    height: 160,
  },
  picture: {
    height: 143,
    backgroundColor: 'lightgrey',
  },
  text: {
    fontSize: 16,
    backgroundColor: 'snow',
  }
};

export default StyleSheet.create(styles);
