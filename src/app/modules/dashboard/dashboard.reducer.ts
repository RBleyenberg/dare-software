
import { createReducer, on, Action } from '@ngrx/store';
import { DashboardsState } from './model';

export const initialState: DashboardsState = {
};

const reducer = createReducer(
  initialState
);

export function dashboardsReducer(state: DashboardsState | undefined, action: Action) {
  return reducer(state, action);
}