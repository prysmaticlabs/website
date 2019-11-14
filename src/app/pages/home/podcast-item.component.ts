import { Component, Input } from '@angular/core';
import { PodcastItem } from '../../models/podcast-item';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
    selector: 'podcast-item',
    templateUrl: './podcast-item.component.html',
    styleUrls: ['./podcast-item.component.css'],
})
export class PodcastItemComponent {
    faPlayCircle = faPlayCircle;
    @Input() podcast: PodcastItem;
}
