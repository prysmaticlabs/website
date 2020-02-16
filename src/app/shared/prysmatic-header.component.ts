import { Component, OnInit } from '@angular/core';
import {
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';

import {
  faFire,
  faUsers,
  faCodeBranch,
  faBlog,
  faNewspaper,
} from '@fortawesome/free-solid-svg-icons';
import { environment } from '../../environments/environment';

@Component({
  selector: 'prysmatic-header',
  templateUrl: './prysmatic-header.component.html',
  styleUrls: ['./prysmatic-header.component.css']
})
export class PrysmaticHeaderComponent {
  faFire = faFire;
  faUsers = faUsers;
  faCodeBranch = faCodeBranch;
  faBlog = faBlog;
  faNewspaper = faNewspaper;
  faDiscord = faDiscord;
  menuStatus = false;
  toggleMenu() {
    this.menuStatus = !this.menuStatus;
  }
  showCareers(): boolean {
    return environment.hiring;
  }
}
