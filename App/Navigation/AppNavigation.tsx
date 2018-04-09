import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

// components
import Home from '../Modules/Home/HomeScene';
import Tour from '../Modules/Home/components/Tour/TourScene';

import ListRecipes from '../Modules/ListRecipes/ListRecipesScene';
import RecipeDetails from '../Modules/RecipeDetails/RecipeScene';
import SearchView from '../Modules/SearchView/SearchViewScene';
import FavoritesView from '../Modules/FavoritesView/FavoritesViewScene';

const HomeStack = StackNavigator({
  Home: { screen: Home },
  ListRecipes: { screen: ListRecipes },
  RecipeDetails: { screen: RecipeDetails },
  Tour: { screen: Tour }
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
          iconName = `ios-list${focused ? '' : '-outline'}`;
        } else if (routeName === 'Search') {
          iconName = `ios-search${focused ? '' : '-outline'}`;
        } else if (routeName === 'Favorites') {
          iconName = `ios-heart${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'grey',
      inactiveTintColor: 'gray',
      showLabel: false,
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);






// Manifest of possible screens
// const PrimaryNav = StackNavigator(
//  {
//    Home: {
//      screen: Home
//    },
//    SecondView: {
//      screen: SecondView
//    }
//  },
//  {
//    // Default config for all screens
//    headerMode: 'none',
//    initialRouteName: 'Home',
    // Uncomment for disable swipe back
    /** navigationOptions: { gesturesEnabled: false }, */
//  });

export default PrimaryNav;
