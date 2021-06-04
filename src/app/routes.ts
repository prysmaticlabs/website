import {Routes} from '@angular/router';
import { PrysmaticLabsMasterPageComponent } from './pages/prysmatic-master.page.component';
import { PrysmaticHomePageComponent } from './pages/home/prysmatic-home.page.component';
import { CanActivateCareers, PrysmaticCareersSdetPageComponent } from './pages/careers-sdet/prysmatic-careers-sdet.page.component';
import { PrysmaticCareersFrontendPageComponent } from './pages/careers-frontend/prysmatic-careers-frontend.page.component';
import { PrysmaticCareersPageComponent } from './pages/careers/prysmatic-careers.page.component';

export const RouteComponents = [
    PrysmaticLabsMasterPageComponent,
    PrysmaticHomePageComponent,
    PrysmaticCareersSdetPageComponent,
    PrysmaticCareersFrontendPageComponent,
    PrysmaticCareersPageComponent,
];
export const routes: Routes = [
    { path: '', component: PrysmaticHomePageComponent },
    { path: 'careers', component: PrysmaticCareersPageComponent, canActivate: [CanActivateCareers] },
    { path: 'careers/frontend', component: PrysmaticCareersFrontendPageComponent, canActivate: [CanActivateCareers] },
    { path: 'careers/sdet', component: PrysmaticCareersSdetPageComponent, canActivate: [CanActivateCareers] },
];
