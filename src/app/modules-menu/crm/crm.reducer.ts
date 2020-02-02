
import { createReducer, Action } from '@ngrx/store';
import { CrmState } from './model';

export const initialState: CrmState = {
};

const reducer = createReducer(
  initialState
);

export function crmReducer(state: CrmState | undefined, action: Action) {
  return reducer(state, action);
}