import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../core/core.module';
import { DashboardsState } from './dashboard/model';
import { dashboardsReducer } from './dashboard/dashboard.reducer';

export const FEATURE_NAME = 'modules';
export const selectModules = createFeatureSelector<State, ModulesState>(
  FEATURE_NAME
);
export const reducers: ActionReducerMap<ModulesState> = {
  dashboards: dashboardsReducer
};

export interface ModulesState {
  dashboards: DashboardsState;
}

export interface State extends AppState {
  modules: ModulesState;
}