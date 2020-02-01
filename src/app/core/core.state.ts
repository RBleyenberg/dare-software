import { ActionReducerMap, MetaReducer, createFeatureSelector } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { initStateFromLocalStorage } from './meta-reducers/init-state-from-local-storage.reducer';
import { debug } from './meta-reducers/debug.reducer';
import { RouterStateUrl } from './router/router.state';
import { AppConfig } from '../../environments/environment';
import { settingsReducer } from './settings/settings.reducer';
import { SettingsState } from './settings/settings.model';

export const reducers: ActionReducerMap<AppState> = {
    router: routerReducer,
    settings: settingsReducer
};

export const metaReducers: MetaReducer<AppState>[] = [
    initStateFromLocalStorage
];

if (!AppConfig.production) {
    if (!AppConfig.test) {
        metaReducers.unshift(debug);
    }
}

export const selectSettingsState = createFeatureSelector<
  AppState,
  SettingsState
>('settings');

export const selectRouterState = createFeatureSelector<AppState, RouterReducerState<RouterStateUrl>>('router');

export interface AppState {
    settings: SettingsState;
    router: RouterReducerState<RouterStateUrl>;
}