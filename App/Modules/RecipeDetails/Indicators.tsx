import * as React from 'react';
import {
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './RecipeStyle';

interface Props {
  time: string;
  portions: number;
}

export default class Indicators extends React.Component<Props> {
  
  render() {
    const { portions, time } = this.props;
    return (
      <View style={styles.indicatorMainContainer}>
        <View style={styles.indicatorIconContainer}>
          <View style={styles.indicatorIcon}>
            <Icon name={'account-multiple-outline'} size={18} color={'snow'}/>
          </View>
          <Text style={styles.indicatorText}>{`${portions} portions`}</Text>
        </View>
        <View style={[styles.indicatorIconContainer, { width: 100 }]}>
          <View style={styles.indicatorIcon}>
            <Icon name={'timer'} size={18} color={'snow'}/>
          </View>
          <Text style={styles.indicatorText}>{time}</Text>
        </View>
      </View>
    );
  }
}