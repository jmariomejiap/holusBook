import * as React from 'react';
import {
  Text,
  View,
  ImageBackground,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { HomeIndex as T } from '../types/appTypes';


// Styles
import styles from './HomeStyle';

const { width } = Dimensions.get('window');

export default class Home extends React.Component<T.Props, T.State> {
  static navigationOptions = {
    gesturesEnabled: false
  };

  constructor(props: T.Props) {
    super(props);
    this.state = {
      Mounted: false,
      isRefreshing: false,
    }

    // this._showTour();

    /** Bind Functions */
    // Actions
    this._onClickNavigate = this._onClickNavigate.bind(this);
    this._onRefresh = this._onRefresh.bind(this);
  }

  // determines whether Tour should be call or not.
  // _showTour() {
    // console.log('this.props = ', this.props);
    // if (!this.props.tourTaken) {
      // console.log('show tour going to navigate to tour');
      // this.props.navigation.navigate('Tour');
    // }    
  // }


  componentDidMount() {
    console.log('index props = ', this.props);
    if (!this.state.Mounted) {
      this.setState({ Mounted: true });      
      return this.props.fetchData();
    }
    this.setState({ Mounted: true });
  }


  _onClickNavigate(name: string) {
    this.props.navigation.navigate('ListRecipes', { name });
  }

  
  _onRefresh() {    
    //this.props.handleRefreshing();
    this.setState({ isRefreshing: true });
    // fetch
    this.props.fetchData()
      .then(() => {
        //this.props.handleRefreshing();
        //console.log('after fetching data. categories = ', this.props.dinnerData);
        this.setState({ isRefreshing: false });
      });
  }


  _keyExtractor = (item: any) => {
    return item.key;
  }

  _renderItem = ({item}: any) => {
    const whiteTitle = item.key === 'Dinner' ? { color: 'snow'} : null ;
    return (
      <TouchableOpacity
        key={item.key}
        style={styles.touchableContainer}
        onPress={() => this._onClickNavigate(item.key)}
      >
        <View 
          style={styles.catImageContainer}>
          <ImageBackground
            source={{ uri: item.uri }}
            style={[styles.image, { width: width - 20 }]}
          >
            <Text style={[styles.categorieText, whiteTitle]}>{item.key}</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  }  
  

  render() {
    return (
      <View style={styles.categoriesContainer}>        
        <FlatList 
          data={this.props.categoriesData}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this._onRefresh}
            />
          }
        />     
    </View> 
    );
  }
}
