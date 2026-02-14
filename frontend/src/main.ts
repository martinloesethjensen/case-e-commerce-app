import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { CategoriesRepository } from './app/domain/repositories/categories.repository';
import { CategoriesRepositoryImpl } from './app/data/repositories/categories.repository.impl';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: CategoriesRepository, useClass: CategoriesRepositoryImpl },
    provideIonicAngular(),
    provideRouter(routes),
    provideHttpClient(),
  ],
});
