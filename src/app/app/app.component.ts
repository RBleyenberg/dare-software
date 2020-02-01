import browser from 'browser-detect';
import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../core/services';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../../environments/environment';
import { routeAnimations, LocalStorageService, AppState, selectSettingsStickyHeader, selectSettingsLanguage, selectEffectiveTheme } from '../core/core.module';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { actionSettingsChangeAnimationsPageDisabled } from '../core/settings/settings.actions';

@Component({
  selector: 'dare-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit {

  year = new Date().getFullYear();
  logo = require('../../assets/logo/dare.png');
  languages = ['en', 'nl'];
  navigation = [
    { link: 'home', label: 'menu.home' }
  ];
  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'menu.settings' }
  ];

  stickyHeader$: Observable<boolean>;
  language$: Observable<string>;
  theme$: Observable<string>;

  constructor(
    public electronService: ElectronService,
    public translate: TranslateService,
    private store: Store<AppState>,
    private storageService: LocalStorageService) {

    translate.setDefaultLang('en');
    console.log('AppConfig', AppConfig);

    if (electronService.isElectron) {
      console.log(process.env);
      console.log('Mode electron');
      console.log('Electron ipcRenderer', electronService.ipcRenderer);
      console.log('NodeJS childProcess', electronService.childProcess);
    } else {
      console.log('Mode web');
    }
  }

  private static isIEorEdgeOrSafari() {
    return ['ie', 'edge', 'safari'].includes(browser().name);
  }

  ngOnInit(): void {

    this.storageService.testLocalStorage();

    if (AppComponent.isIEorEdgeOrSafari()) {
      this.store.dispatch(
        actionSettingsChangeAnimationsPageDisabled({
          pageAnimationsDisabled: true
        })
      );
    }
    this.stickyHeader$ = this.store.pipe(select(selectSettingsStickyHeader));
    this.language$ = this.store.pipe(select(selectSettingsLanguage));
    this.theme$ = this.store.pipe(select(selectEffectiveTheme));
  }

  onLoginClick() {
  }

  onLogoutClick() {
  }

}
