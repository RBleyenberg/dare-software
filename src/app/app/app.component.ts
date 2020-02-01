import browser from 'browser-detect';
import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../core/services';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../../environments/environment';
import { routeAnimations } from '../core/core.module';

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
    { link: 'home', label: 'home' }
  ];

  constructor(
    public electronService: ElectronService,
    private translate: TranslateService ) {

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

    if (AppComponent.isIEorEdgeOrSafari()) {

      console.log("FUCK FUCK FUCK")

    }

  }

  onLoginClick() {
  }

  onLogoutClick() {
  }

  onLanguageSelect({ value: language }) {
  }

}
