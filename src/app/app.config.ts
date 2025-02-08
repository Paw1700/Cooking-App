import { ApplicationConfig, provideZoneChangeDetection, isDevMode, provideAppInitializer, inject } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';
import { provideAnimations } from '@angular/platform-browser/animations';
import { APP_SERVICE } from './app.service';
import { APP_APPERANCE_SERVICE } from './services/apperance.service';
import { APP_STATE_SERVICE } from './services/state.service';
import { APP_STORAGE_SERVICE } from './services/storage.service';
import { DatabaseManager } from './util/db.driver';
import { RECIPES_LIST_PAGE_RESOLVER } from '../resolvers/recipes_list_page.resolver';

export const appConfig: ApplicationConfig = {
  providers: [
    // ** ANGULAR PROVIDERS **
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
    provideAnimations(),
    provideAppInitializer(() => inject(APP_SERVICE).startApp()),
    
    // ** RESOLVERS **
    RECIPES_LIST_PAGE_RESOLVER,

    // ** SERVICES **
    APP_SERVICE,
    APP_STATE_SERVICE,
    APP_APPERANCE_SERVICE,
    APP_STORAGE_SERVICE,

    // ** UTILS **
    DatabaseManager
  ]
};
