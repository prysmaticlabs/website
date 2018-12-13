import { Component } from '@angular/core';
import { faMedium, faGitter, 
    faGithub, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'prysmatic-master-page',
  templateUrl: './prysmatic-master.page.component.html',
  styleUrls: ['./prysmatic-master.page.component.css']
})
export class PrysmaticLabsMasterPageComponent {
    faMedium = faMedium;
    faGitter = faGitter;
    faGithub = faGithub;
    faTwitter = faTwitter;
    faDiscord = faDiscord;

    menuStatus:boolean = false;
    toggleMenu(){
        this.menuStatus = !this.menuStatus;
    }
}
