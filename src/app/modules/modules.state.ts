import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../core/core.module';
import { DashboardState } from './dashboard/model';
import { dashboardReducer } from './dashboard/dashboard.reducer';
import { crmReducer } from './crm/crm.reducer';
import { CrmState } from './crm/model';

export const FEATURE_NAME = 'modules';
export const selectModules = createFeatureSelector<State, ModulesState>(
  FEATURE_NAME
);
export const reducers: ActionReducerMap<ModulesState> = {
  dashboard: dashboardReducer,
  crm: crmReducer
};

export interface ModulesState {
  dashboard: DashboardState;
  crm: CrmState;
}

export interface State extends AppState {
  modules: ModulesState;
}