// App Modules
import { copyObject } from '../../Utils/objectUtils';
import { Action } from '../../Redux/types';
import { RecipeData } from '../Home/../../Modules/types/appTypes';

// Constants
import {
  SET_APP_NAME,
  TOUR_STATE,
  UPDATE_SOUP_DATA,
  UPDATE_APPETIZER_DATA,
  UPDATE_DINNER_DATA,
  UPDATE_SALAD_DATA,
  UPDATE_DESSERT_DATA,
  DATA_REFRESHING,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  FAVORITE_SELECTED,
  RESET_FAVORITE_SELECTED,
} from './HomeAction';

interface Cat {
  [key: string]: any;
}

// Type
type State = {
  appName: string,
  tourTaken: boolean,
  soupData: Array<RecipeData>
  appetizerData: Array<RecipeData>;
  dinnerData: Array<RecipeData>;
  saladData: Array<RecipeData>;
  dessertData: Array<RecipeData>;
  categoriesData: Array<any>;
  isRefreshing: boolean;
  favorites: Array<RecipeData>;
  isFavoriteSelected: boolean;
};

// data to populate categoriesView
const categories = [
  { key: 'Soups', source: require('../../Modules/Home/components/catImages/Soups.jpg') },
  { key: 'Appetizers', source: require('../../Modules/Home/components/catImages/Appetizers.jpg') },
  { key: 'Dinner', source: require('../../Modules/Home/components/catImages/Dinner.jpg') },
  { key: 'Salads', source: require('../../Modules/Home/components/catImages/Salads.jpg') },
  { key: 'Desserts', source: require('../../Modules/Home/components/catImages/Desserts.jpg') },
];

const inmutableState: State = {
  appName: '',
  tourTaken: false,
  soupData: [],
  appetizerData: [],
  dinnerData: [],
  saladData: [],
  dessertData: [],
  categoriesData: categories,
  isRefreshing: false,
  favorites: [],
  isFavoriteSelected: false,
};

const initialState = copyObject(inmutableState);

export default function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case SET_APP_NAME:
      return {
        ...state,
        appName: action.value
      };

    case TOUR_STATE:
      return {
        ...state,
        tourTaken: !state.tourTaken,
      }

    case UPDATE_SOUP_DATA:
      return {
        ...state,
        soupData: [...action.value]
      }

    case UPDATE_APPETIZER_DATA:
      return {
        ...state,
        appetizerData: [...action.value]
      }
    
    case UPDATE_DINNER_DATA:
      return {
        ...state,
        dinnerData: [...action.value]
      }

    case UPDATE_SALAD_DATA:
      return {
        ...state,
        saladData: [...action.value]
      }
    
    case UPDATE_DESSERT_DATA:
      return {
        ...state,
        dessertData: [...action.value]
      }
      
    case DATA_REFRESHING:
      return {
        ...state,
        isRefreshing: !state.isRefreshing
      }

    case RESET_FAVORITE_SELECTED:
      return {
        ...state,
        isFavoriteSelected: false,
      }

    case FAVORITE_SELECTED:
      return {
        ...state,
        isFavoriteSelected: true,
      }

    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.value],
      }

    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((recipe: RecipeData ) => recipe.key !== action.value.key)
      }

    default:
      return state;
  }
}

// External Types
export { State };
