// App Modules
import { copyObject } from '../../Utils/objectUtils';
import { Action } from '../../Redux/types';

// Constants
import { SET_APP_NAME } from './HomeAction';

// Type
type State = {
  appName?: string
};

const inmutableState: State = {
  appName: ''
};

const initialState = copyObject(inmutableState);

export default function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case SET_APP_NAME:
      return {
        ...state,
        appName: action.value
      };
    default:
      return state;
  }
}

// External Types
export { State };
