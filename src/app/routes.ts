import {Routes} from '@angular/router';
import { PrysmaticLabsMasterPageComponent } from './pages/prysmatic-master.page.component';
import { PrysmaticHomePageComponent } from './pages/home/prysmatic-home.page.component';
import { CanActivateCareers } from './pages/careers/can-activate-careers/can-activate-careers';
import { PrysmaticCareersFrontendPageComponent } from './pages/careers/frontend/prysmatic-careers-frontend.page.component';
import { PrysmaticCareersPageComponent } from './pages/careers/prysmatic-careers.page.component';
import { PrysmaticCareersSecurityPageComponent } from './pages/careers/security/prysmatic-careers-security.page.component';
import { PrysmaticCareersSdetPageComponent } from './pages/careers/sdet/prysmatic-careers-sdet.page.component';
import { PrysmaticCareersSwePageComponent } from './pages/careers/swe/prysmatic-careers-swe.page.component';
import { PrysmaticCareersSweJuniorPageComponent } from './pages/careers/swe-junior/prysmatic-careers-swe-junior.page.component';

export const RouteComponents = [
    PrysmaticLabsMasterPageComponent,
    PrysmaticHomePageComponent,
    PrysmaticCareersSdetPageComponent,
    PrysmaticCareersSecurityPageComponent,
    PrysmaticCareersSwePageComponent,
    PrysmaticCareersSweJuniorPageComponent,
    PrysmaticCareersFrontendPageComponent,
    PrysmaticCareersPageComponent,
];
export const routes: Routes = [
    { path: '', component: PrysmaticHomePageComponent },
    { path: 'careers', component: PrysmaticCareersPageComponent, canActivate: [CanActivateCareers] },
    { path: 'careers/frontend', component: PrysmaticCareersFrontendPageComponent, canActivate: [CanActivateCareers] },
    { path: 'careers/devops', component: PrysmaticCareersSdetPageComponent, canActivate: [CanActivateCareers] },
    { path: 'careers/software', component: PrysmaticCareersSwePageComponent, canActivate: [CanActivateCareers] },
    { path: 'careers/software-junior', component: PrysmaticCareersSweJuniorPageComponent, canActivate: [CanActivateCareers] },
    { path: 'careers/security', component: PrysmaticCareersSecurityPageComponent, canActivate: [CanActivateCareers] },
];
