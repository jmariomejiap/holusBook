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
  UPDATE_ALL_DATA,
  SEARCH_INPUT,
} from './HomeAction';

interface Cat {
  [key: string]: any;
}

// Type
type State = {
  appName: string;
  tourTaken: boolean;
  allData: Array<RecipeData>;
  soupData: Array<RecipeData>;  
  appetizerData: Array<RecipeData>;
  dinnerData: Array<RecipeData>;
  saladData: Array<RecipeData>;
  dessertData: Array<RecipeData>;
  categoriesData: Array<any>;
  isRefreshing: boolean;
  favorites: Array<RecipeData>;
  isFavoriteSelected: boolean;
  searchInput: string;
};

// data to populate categoriesView
const categories = [
  { key: 'Soups', uri: 'https://s3-us-west-2.amazonaws.com/holus-book/category_images/Soups.jpg' },
  { key: 'Appetizers', uri: 'https://s3-us-west-2.amazonaws.com/holus-book/category_images/Appetizers.jpg' },
  { key: 'Dinner', uri: 'https://s3-us-west-2.amazonaws.com/holus-book/category_images/Dinner.jpg' },
  { key: 'Salads', uri: 'https://s3-us-west-2.amazonaws.com/holus-book/category_images/Salads.jpg' },
  { key: 'Desserts', uri: 'https://s3-us-west-2.amazonaws.com/holus-book/category_images/Desserts.jpg' },
];

const inmutableState: State = {
  appName: '',
  tourTaken: false,
  allData: [],
  soupData: [],
  appetizerData: [],
  dinnerData: [],
  saladData: [],
  dessertData: [],
  categoriesData: categories,
  isRefreshing: false,
  favorites: [],
  isFavoriteSelected: false,
  searchInput: '',
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
    
    case UPDATE_ALL_DATA:
      return {
        ...state,
        allData: [...action.value]
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
    
    case SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.value,
      }


    default:
      return state;
  }
}

// External Types
export { State };
