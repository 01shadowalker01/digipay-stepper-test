import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BASE_URL_TOKEN } from './tokens';
import { DEFAULT_CONFIG } from './default.config';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    { provide: BASE_URL_TOKEN, useValue: DEFAULT_CONFIG.baseUrl },
  ],
};
