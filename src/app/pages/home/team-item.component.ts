import { Component, Input } from '@angular/core';
import {
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { Teammate } from '../../models/teammate';

@Component({
  selector: 'team-item',
  templateUrl: './team-item.component.html',
})
export class TeamItemComponent {
  faTwitter = faTwitter;
  faGithub = faGithub;
  @Input() teammate: Teammate;
}
