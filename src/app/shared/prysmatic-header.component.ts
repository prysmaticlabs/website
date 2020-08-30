import { Component } from '@angular/core';
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
import { TranslateService } from '@ngx-translate/core';

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

  languages = [
    {
      code: "en",
      name: "English"
    },
    {
      code: "pl",
      name: "Polski"
    }
  ]

  constructor(private translateService: TranslateService) { }

  toggleMenu() {
    this.menuStatus = !this.menuStatus;
  }

  showCareers(): boolean {
    return environment.hiring;
  }

  onLanguageSelected(languageCode: string) {
    localStorage.setItem('language', languageCode);
    this.translateService.use(languageCode)
  }
}
