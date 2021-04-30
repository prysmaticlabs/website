import {Routes} from '@angular/router';
import { PrysmaticLabsMasterPageComponent } from './pages/prysmatic-master.page.component';
import { PrysmaticHomePageComponent } from './pages/home/prysmatic-home.page.component';
import { CanActivateCareers, PrysmaticCareersPageComponent } from './pages/careers/prysmatic-careers.page.component';
import { PrysmaticCareersFrontendPageComponent } from './pages/careers-frontend/prysmatic-careers-frontend.page.component';

export const RouteComponents = [
    PrysmaticLabsMasterPageComponent,
    PrysmaticHomePageComponent,
    PrysmaticCareersPageComponent,
    PrysmaticCareersFrontendPageComponent,
];
export const routes: Routes = [
    { path: '', component: PrysmaticHomePageComponent },
    { path: 'careers', component: PrysmaticCareersFrontendPageComponent, canActivate: [CanActivateCareers] },
];
