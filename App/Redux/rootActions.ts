import { Actions as HomeAction } from '../Reducers/Home/HomeAction';

export type RootAction =
  | HomeAction[keyof HomeAction];
  // | OtherActions[keyof OtherActions] **/;
