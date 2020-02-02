
import { createReducer, Action } from '@ngrx/store';
import { DashboardState } from './model';

export const initialState: DashboardState = {
};

const reducer = createReducer(
  initialState
);

export function dashboardReducer(state: DashboardState | undefined, action: Action) {
  return reducer(state, action);
}