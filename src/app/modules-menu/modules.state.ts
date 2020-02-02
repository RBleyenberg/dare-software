import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../core/core.module';
import { DashboardState } from './dashboard/model';
import { dashboardReducer } from './dashboard/dashboard.reducer';
import { crmReducer } from './crm/crm.reducer';
import { CrmState } from './crm/model';

export const FEATURE_NAME = 'modulesMenu';
export const selectModules = createFeatureSelector<State, ModulesMenuState>(
  FEATURE_NAME
);
export const reducers: ActionReducerMap<ModulesMenuState> = {
  dashboard: dashboardReducer,
  crm: crmReducer
};

export interface ModulesMenuState {
  dashboard: DashboardState;
  crm: CrmState;
}

export interface State extends AppState {
  modulesMenu: ModulesMenuState;
}