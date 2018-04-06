// App Modules
import { copyObject } from '../../Utils/objectUtils';
import { Action } from '../../Redux/types';

// Constants
import {
  SET_APP_NAME,
  TOUR_STATE,
  UPDATE_SOUP_DATA,
  UPDATE_APPETIZER_DATA,
  UPDATE_DINNER_DATA,
  UPDATE_SALAD_DATA,
  UPDATE_DESSERT_DATA,
} from './HomeAction';

// Type
type State = {
  appName: string,
  tourState: boolean,
  soupData: Array<any>;
  appetizerData: Array<any>;
  dinnerData: Array<any>;
  saladData: Array<any>;
  dessertData: Array<any>;
};

const inmutableState: State = {
  appName: '',
  tourState: false,
  soupData: [],
  appetizerData: [],
  dinnerData: [],
  saladData: [],
  dessertData: [],
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
        tourState: !state.tourState,
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
      
    default:
      return state;
  }
}

// External Types
export { State };
