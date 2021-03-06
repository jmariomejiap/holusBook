import { Dispatch, Action } from '../../Redux/types';
import callApi from '../../Utils/apiCaller';
import filterCategory from '../../Utils/filterCategory';
import { RecipeData } from '../../Modules/types/appTypes';
import { recipesDataPath } from '../../Config/index';

// Constants
const SET_APP_NAME = 'home/setAppName';
const TOUR_STATE = 'TOUR_STATE';
const UPDATE_ALL_DATA = 'UPDATE_ALL_DATA';
const UPDATE_SOUP_DATA = 'UPDATE_SOUP_DATA';
const UPDATE_APPETIZER_DATA = 'UPDATE_APPETIZER_DATA';
const UPDATE_DINNER_DATA = 'UPDATE_DINNER_DATA';
const UPDATE_SALAD_DATA = 'UPDATE_SALAD_DATA';
const UPDATE_DESSERT_DATA = 'UPDATE_DESSERT_DATA';
const DATA_REFRESHING = 'DATA_REFRESHING';
const ADD_FAVORITE = 'ADD_FAVORITE';
const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
const FAVORITE_SELECTED = 'FAVORITE_SELECTED';
const RESET_FAVORITE_SELECTED = 'RESET_FAVORITE_SELECTED';
const SEARCH_INPUT = 'SEARCH_INPUT';



export type Actions = {
  SET_APP_NAME: { type: typeof SET_APP_NAME, value: string },
  TOUR_STATE: { type: typeof TOUR_STATE }
};


/**
 * Basic Action Example
 */
export const set_app_name = (value: string): Action => ({ type: SET_APP_NAME, value });

export const handleTourState = (): Action => ({ type: TOUR_STATE });

export const handleRefreshing = (): Action => ({ type: DATA_REFRESHING });

export const updateAllData = (arrRecipes: Array<RecipeData> ) => ({ type: UPDATE_ALL_DATA, value: arrRecipes })

export const updateSoupData = (arrRecipes: Array<RecipeData> ): Action => ({ type: UPDATE_SOUP_DATA, value: arrRecipes });

export const updateAppetizersData = (arrRecipes: Array<RecipeData> ): Action => ({ type: UPDATE_APPETIZER_DATA, value: arrRecipes });

export const updateDinnerData = (arrRecipes: Array<RecipeData> ): Action => ({ type: UPDATE_DINNER_DATA, value: arrRecipes });

export const updateSaladData = (arrRecipes: Array<RecipeData> ): Action => ({ type: UPDATE_SALAD_DATA, value: arrRecipes });

export const updateDessertData = (arrRecipes: Array<RecipeData> ): Action => ({ type: UPDATE_DESSERT_DATA, value: arrRecipes });

export const addFavorite = (recipeObj: RecipeData): Action => ({ type: ADD_FAVORITE, value: recipeObj });

export const removeFavorite = (recipeObj: RecipeData): Action => ({ type: REMOVE_FAVORITE, value: recipeObj });

export const handleFavoriteOn = (): Action => ({ type: FAVORITE_SELECTED });

export const handleResetFavorite = (): Action => ({ type: RESET_FAVORITE_SELECTED });

export const handleSearchInput = (value: string) => ({ type: SEARCH_INPUT, value })

export const fetchData = () => {
  return(dispatch: Dispatch) => {
    return callApi(recipesDataPath)
      .then(data => {
        const soups = filterCategory(data, 'soup');
        const appetizers = filterCategory(data, 'appetizer');
        const dinners = filterCategory(data, 'dinner');
        const salads = filterCategory(data, 'salad');
        const desserts = filterCategory(data, 'dessert');      

        dispatch(updateAllData(data));
        dispatch(updateSoupData(soups));
        dispatch(updateAppetizersData(appetizers));
        dispatch(updateDinnerData(dinners));
        dispatch(updateSaladData(salads));
        dispatch(updateDessertData(desserts));
      });

  }
}

// region reduxExample
/**
 * redux-thunk Example
 */
// export const set_app_name = (value: string) => {
//   return (dispatch: Dispatch) => {
//     dispatch({ type: SET_APP_NAME, value });
//   }
// };
// endregion reduxExample

export {
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
  SEARCH_INPUT
};
