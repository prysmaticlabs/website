import { Component } from '@angular/core';
import { faEthereum, faMedium,faGitter, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faComments } from '@fortawesome/free-regular-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons'
@Component({
    selector: 'prysmatic-home-page',
    templateUrl: './prysmatic-home.page.component.html',
    styleUrls: ['./prysmatic-home.page.component.css']
})
export class PrysmaticHomePageComponent {
    faEthereum = faEthereum;
    faComments = faComments;
    faMedium = faMedium;
    faCode = faCode;
    faGitter = faGitter;
    faTwitter = faTwitter;
    faDiscord = faDiscord;

    teammates = [
        {
            name: 'Raul Jordan',
            bio: 'Previously 4+ years of software engineering. Experienced in Golang, Javascript/Node, Machine Learning, and Ethereum Protocol Development.',
            photo: 'raul.jpg',
        },
        {
            name: 'Preston Van Loon',
            bio: 'Previously 4+ years of software engineering. Experienced in Golang, Javascript/Node, Machine Learning, and Ethereum Protocol Development.',
            photo: 'preston.jpg',
        },
    ];

    constructor() {

    }

}
