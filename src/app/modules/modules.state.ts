import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../core/core.module';
import { DashboardState } from './dashboard/model';
import { dashboardReducer } from './dashboard/dashboard.reducer';

export const FEATURE_NAME = 'modules';
export const selectModules = createFeatureSelector<State, ModulesState>(
  FEATURE_NAME
);
export const reducers: ActionReducerMap<ModulesState> = {
  dashboard: dashboardReducer
};

export interface ModulesState {
  dashboard: DashboardState;
}

export interface State extends AppState {
  modules: ModulesState;
}