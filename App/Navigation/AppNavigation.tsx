import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

//import { StackNavigator } from 'react-navigation';

import Home from '../Modules/Home/HomeScene';
import ListRecipes from '../Modules/ListRecipes/ListRecipesScene';
import RecipeDetails from '../Modules/RecipeDetails/RecipeScene';
import SecondView from '../Modules/SecondView/SecondViewScene';
import ThirdView from '../Modules/ThirdView'

const HomeStack = StackNavigator({
  Home: { screen: Home },
  ListRecipes: { screen: ListRecipes },
  RecipeDetails: { screen: RecipeDetails }
},
{
// Default config for all screens
  // headerMode: 'none',
  initialRouteName: 'Home',
    // Uncomment for disable swipe back
    /** navigationOptions: { gesturesEnabled: false }, */
});

const SearchStack = StackNavigator({
  Search: { screen: SecondView },
  RecipeDetails: { screen: RecipeDetails }
},
{
  initialRouteName: 'Search',
});

const FavoritesStack = StackNavigator({
  Favorites: { screen: ThirdView },
  RecipeDetails: { screen: RecipeDetails }
},
{
  initialRouteName: 'Favorites',
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
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Search') {
          iconName = `ios-search${focused ? '' : '-outline'}`;
        } else if (routeName === 'Favorites') {
          iconName = `ios-settings${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'grey',
      inactiveTintColor: 'gray',
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
