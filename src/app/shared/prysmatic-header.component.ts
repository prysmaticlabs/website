import { Component, OnInit } from '@angular/core';
import { faMedium, faGitter,
  faGithub, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'prysmatic-header',
  templateUrl: './prysmatic-header.component.html',
  styleUrls: ['./prysmatic-header.component.css']
})
export class PrysmaticHeaderComponent {
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
