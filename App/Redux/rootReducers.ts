import { State as HomeState } from '../Reducers/Home/HomeReducer';

export interface RootState {
  home: HomeState;
  nav: any;
}
