import {Component, Input} from '@angular/core';
import {
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { Teammate } from '../models/teammate';

@Component({
  selector: 'team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.css']
})
export class TeamItemComponent {
  faTwitter = faTwitter;
  @Input() teammate: Teammate;
}
