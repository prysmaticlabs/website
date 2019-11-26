import {Routes} from '@angular/router';
import { PrysmaticLabsMasterPageComponent } from './pages/prysmatic-master.page.component';
import { PrysmaticHomePageComponent} from './pages/home/prysmatic-home.page.component';

export const RouteComponents = [
    PrysmaticLabsMasterPageComponent,
    PrysmaticHomePageComponent,
];
export const routes: Routes =[
    { path: '', component: PrysmaticHomePageComponent },
];