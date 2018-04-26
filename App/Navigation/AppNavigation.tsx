import * as React from 'react';
import { Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigator, TabNavigator, TabBarBottom, SwitchNavigator } from 'react-navigation';

// components
import Home from '../Modules/Home/HomeScene';
import Tour from '../Modules/Home/components/Tour/TourScene';

import ListRecipes from '../Modules/ListRecipes/ListRecipesScene';
import RecipeDetails from '../Modules/RecipeDetails/RecipeScene';
import SearchView from '../Modules/SearchView/SearchViewScene';
import FavoritesView from '../Modules/FavoritesView/FavoritesViewScene';

// new
import LoadingScreen from '../Modules/Home/LoadingApp';

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
            <Image source={require('../Assets/images/categories_selected.png')} style={{ width: 24, height: 24 }}/> :
            <Image source={require('../Assets/images/categories.png')} style={{ width: 24, height: 24 }}/>
        } else if (routeName === 'Search') {
          return (focused) ?
            <Image source={require('../Assets/images/search_selected.png')} style={{ width: 24, height: 24 }}/> :
            <Image source={require('../Assets/images/search.png')} style={{ width: 24, height: 24 }}/>
        } else if (routeName === 'Favorites') {
          iconName = `ios-heart${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
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


export default SwitchNav;
