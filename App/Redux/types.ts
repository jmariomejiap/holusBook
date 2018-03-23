import { Dispatch } from 'react-redux';

import { RootAction } from './rootActions';

// Reducer Interface

export interface Action {
  type: string;
  value: any;
}

export type Dispatch = Dispatch<RootAction>;
