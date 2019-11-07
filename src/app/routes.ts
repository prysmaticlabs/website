import {Routes} from '@angular/router';
import { PrysmaticLabsMasterPageComponent } from './pages/prysmatic-master.page.component';
import { PrysmaticHomePageComponent} from './pages/home/prysmatic-home.page.component';
import { PrysmaticAboutUsComponent } from './pages/about-us/prysmatic-about-us.component';


export const RouteComponents = [
    PrysmaticLabsMasterPageComponent,
    PrysmaticHomePageComponent,
    PrysmaticAboutUsComponent,
];
export const routes: Routes =[
    { path: '', component: PrysmaticHomePageComponent },
    { path: 'about-us', component: PrysmaticAboutUsComponent },
];