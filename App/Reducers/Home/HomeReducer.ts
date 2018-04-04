// App Modules
import { copyObject } from '../../Utils/objectUtils';
import { Action } from '../../Redux/types';

// Constants
import { SET_APP_NAME, TOUR_STATE } from './HomeAction';

// Type
type State = {
  appName: string,
  tourState: boolean,
};

const inmutableState: State = {
  appName: '',
  tourState: false,
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
    
    default:
      return state;
  }
}

// External Types
export { State };
