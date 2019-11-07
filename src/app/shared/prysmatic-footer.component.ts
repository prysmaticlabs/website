import { Component } from '@angular/core';
import { faMedium, faGitter,
    faGithub, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
@Component({
    selector: 'prysmatic-footer',
    templateUrl: './prysmatic-footer.component.html',
    styleUrls: ['./prysmatic-footer.component.css']
})
export class PrysmaticFooterComponent {
    faMedium = faMedium;
    faGitter = faGitter;
    faGithub = faGithub;
    faTwitter = faTwitter;
    faDiscord = faDiscord;
    constructor() {

    }
}
