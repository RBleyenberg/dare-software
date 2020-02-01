import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTE_ANIMATIONS_ELEMENTS, routeAnimations } from './animations/route.animations';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppErrorHandler } from './error-handler/app-error-handler.service';

import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppConfig } from '../../environments/environment';
import { CustomSerializer } from './router/custom-serializer';
import { AppState, reducers, metaReducers, selectRouterState } from './core.state';
import { TitleService } from './title/title.service';
import { NotificationService } from './notifications/notification.service';
import { AnimationsService } from './animations/animations.service';
import { LocalStorageService } from './local-storage/local-storage.service';
import { HttpErrorInterceptor } from './http-interceptors/http-error.interceptor';

export {
  TitleService,
  routeAnimations, 
  ROUTE_ANIMATIONS_ELEMENTS,
  AppState,
  selectRouterState,
  AnimationsService,
  NotificationService,
  LocalStorageService
}

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([

    ]),
    StoreDevtoolsModule.instrument({ 
      maxAge: 25,
      logOnly: AppConfig.production 
    }),
    
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  exports: [TranslateModule]
})

export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
