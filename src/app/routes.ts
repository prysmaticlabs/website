import {Routes} from '@angular/router';
import { PrysmaticLabsMasterPageComponent } from './pages/prysmatic-master.page.component';
import { PrysmaticHomePageComponent } from './pages/home/prysmatic-home.page.component';
import { CanActivateCareers, PrysmaticCareersSdetPageComponent } from './pages/careers-sdet/prysmatic-careers-sdet.page.component';
import { PrysmaticCareersFrontendPageComponent } from './pages/careers-frontend/prysmatic-careers-frontend.page.component';
import { PrysmaticCareersPageComponent } from './pages/careers/prysmatic-careers.page.component';
import { PrysmaticCareersSecurityPageComponent } from './pages/careers-security/prysmatic-careers-security.page.component';

export const RouteComponents = [
    PrysmaticLabsMasterPageComponent,
    PrysmaticHomePageComponent,
    PrysmaticCareersSdetPageComponent,
    PrysmaticCareersSecurityPageComponent,
    PrysmaticCareersFrontendPageComponent,
    PrysmaticCareersPageComponent,
];
export const routes: Routes = [
    { path: '', component: PrysmaticHomePageComponent },
    { path: 'careers', component: PrysmaticCareersPageComponent, canActivate: [CanActivateCareers] },
    { path: 'careers/frontend', component: PrysmaticCareersFrontendPageComponent, canActivate: [CanActivateCareers] },
    { path: 'careers/sdet', component: PrysmaticCareersSdetPageComponent, canActivate: [CanActivateCareers] },
    { path: 'careers/security', component: PrysmaticCareersSecurityPageComponent, canActivate: [CanActivateCareers] },
];
