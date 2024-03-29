import { ApplicationConfig } from '@angular/core';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './utils/auth.interceptor';
import {provideAnimations} from '@angular/platform-browser/animations';
import {
    PreloadAllModules,
    provideRouter,
    withHashLocation,
    withInMemoryScrolling,
    withPreloading
} from '@angular/router';


export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(routes,
        withPreloading(PreloadAllModules),
        withInMemoryScrolling({scrollPositionRestoration: 'enabled'}),
        withHashLocation()
    ),

],
};
