import {Routes} from '@angular/router';
import { PrysmaticLabsMasterPageComponent } from './pages/prysmatic-master.page.component';
import { PrysmaticHomePageComponent } from './pages/home/prysmatic-home.page.component';
import { PrysmaticCareersPageComponent } from './pages/careers/prysmatic-careers.page.component';

export const RouteComponents = [
    PrysmaticLabsMasterPageComponent,
    PrysmaticHomePageComponent,
    PrysmaticCareersPageComponent,
];
export const routes: Routes = [
    { path: '', component: PrysmaticHomePageComponent },
    { path: 'careers', component: PrysmaticCareersPageComponent },
];