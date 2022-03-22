import { Component } from '@angular/core';
import { faHome, faFileMedical } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'prysmatic-careers-page',
    templateUrl: './prysmatic-careers.page.component.html',
})
export class PrysmaticCareersPageComponent {
    faHome = faHome;
    faFileMedical = faFileMedical;
}
