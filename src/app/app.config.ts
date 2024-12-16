import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';
import { provideAnimations } from '@angular/platform-browser/animations';
import { APP_SERVICE } from './app.service';
import { APP_APPERANCE_SERVICE } from './services/apperance.service';

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
    
    // ** SERVICES **
    APP_SERVICE,
    APP_APPERANCE_SERVICE

  ]
};
