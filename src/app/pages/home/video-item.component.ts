import { Component, Input } from '@angular/core';
import { VideoItem } from '../../models/video-item';
import {DomSanitizer, SafeHtml, SafeUrl} from '@angular/platform-browser';

@Component({
    selector: 'video-item',
    templateUrl: './video-item.component.html',
})
export class VideoItemComponent {
    @Input() video: VideoItem;
    sanitizer: DomSanitizer;

    constructor(private sr: DomSanitizer) {
        this.sanitizer = sr;
    }

    public get youtubeEmbed() : SafeHtml {
        // Explicitly tell angular to trust the youtube embed URL
        // we passed into this component to prevent raising XSS warnings.
        let someHTML = `<iframe width="100%" height="240px" src="${this.video.url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        return this.sanitizer.bypassSecurityTrustHtml(someHTML);
    }
}
