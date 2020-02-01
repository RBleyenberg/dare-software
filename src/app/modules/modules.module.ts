import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FEATURE_NAME, reducers } from './modules.state';
import { AppConfig } from '../../environments/environment';
import { SharedModule } from '../shared/shared.module';
import { ContainerComponent } from './container/container.component';
import { ModulesEffects } from './modules.effects';
import { ModulesRoutingModule } from './modules-routing.module';
import { DashboardComponent } from './dashboard/web/dashboard-container.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${AppConfig.i18nPrefix}/assets/i18n/modules/`,
    '.json'
  );
}

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    SharedModule,
    ModulesRoutingModule,
    StoreModule.forFeature(FEATURE_NAME, reducers),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),
    EffectsModule.forFeature([
      ModulesEffects
    ])
  ],
    declarations: [
    ContainerComponent,
    DashboardComponent
  ],
  providers: []
})
export class ModulesModule {
  constructor() {}
}