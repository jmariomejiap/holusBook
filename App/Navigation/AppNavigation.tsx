import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigator, TabNavigator, TabBarBottom, SwitchNavigator } from 'react-navigation';

// components
import LoadingScreen from '../Modules/Home/LoadingApp';
import Home from '../Modules/Home/HomeScene';
import Tour from '../Modules/Home/Tour/TourScene';
import ListRecipes from '../Modules/ListRecipes/ListRecipesScene';
import RecipeDetails from '../Modules/RecipeDetails/RecipeScene';
import SearchView from '../Modules/SearchView/SearchViewScene';
import FavoritesView from '../Modules/FavoritesView/FavoritesViewScene';



const TourStack = StackNavigator({
  Tour: { screen: Tour },
},
{ 
  headerMode: 'none',
});

const HomeStack = StackNavigator({
  Home: { screen: Home },
  ListRecipes: { screen: ListRecipes },
  RecipeDetails: { screen: RecipeDetails },
},
{
  initialRouteName: 'Home',
  headerMode: 'none',
});

const SearchStack = StackNavigator({
  Search: { screen: SearchView },
  RecipeDetails: { screen: RecipeDetails }
},
{
  initialRouteName: 'Search',
  headerMode: 'none'
});

const FavoritesStack = StackNavigator({
  Favorites: { screen: FavoritesView },
  RecipeDetails: { screen: RecipeDetails }
},
{
  initialRouteName: 'Favorites',
  headerMode: 'none'
});



const PrimaryNav = TabNavigator(
  {
    Categories: { screen: HomeStack },
    Search: { screen: SearchStack },
    Favorites: { screen: FavoritesStack },

  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Categories') {
          return (focused) ?
            <View style={styles.iconHighlight}>
              <Image source={require('../Assets/images/categories_selected.png')} style={styles.iconDimensionsSelected}/>
            </View>
            :
            <Image source={require('../Assets/images/categories.png')} style={styles.iconDimensions}/>
        } else if (routeName === 'Search') {
          return (focused) ?
            <View style={styles.iconHighlight}>
              <Image source={require('../Assets/images/search_selected.png')} style={styles.iconDimensionsSelected}/> 
            </View>
            :
            <Image source={require('../Assets/images/search.png')} style={styles.iconDimensions}/>
        } else if (routeName === 'Favorites') {
          return (focused) ?
          <View style={styles.iconHighlight}>
            <Ionicons name={'ios-heart'} size={28} color={tintColor} />
          </View>
          :
          <Ionicons name={'ios-heart-outline'} size={25} color={tintColor} />
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: 'rgb(148, 148, 0)',
      inactiveTintColor: 'gray',
      showLabel: false,
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);



const SwitchNav = SwitchNavigator(
  {
    LoadingApp: LoadingScreen,
    App: PrimaryNav,
    Tour: TourStack,
  },
  {
    initialRouteName: 'LoadingApp',
  }
);


const styles = StyleSheet.create({
  iconHighlight: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'rgb(118, 140, 40)',
    borderBottomWidth: 3,
    height: 40,
    width: 40, 
  },
  iconDimensionsSelected: {
    width: 28,
    height: 28,
  },
  iconDimensions: {
    width: 24,
    height: 24,
  }
})


export default SwitchNav;
