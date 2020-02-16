import { Component } from '@angular/core';
import { faMedium, faGitter,
    faGithub, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { environment } from '../../environments/environment';

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
    showCareers(): boolean {
        return environment.hiring;
    }
}
