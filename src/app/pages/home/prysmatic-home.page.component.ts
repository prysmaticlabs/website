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
            name: 'Preston Van Loon',
            bio: 'Formerly Software Engineer at Google. Experienced in Golang, JavaScript / Typescript, Node.js, Java, distributed systems design, and systems architecture. 7+ years of professional software engineering experience.',
            photo: 'preston.jpg',
            twitter: 'https://twitter.com/preston_vanloon',
            github: 'https://github.com/prestonvanloon',
        },
        {
            name: 'Raul Jordan',
            bio: 'Previously 4+ years of software engineering. Experienced in Golang, Javascript/Node, Machine Learning, and Ethereum Protocol Development.',
            photo: 'raul.jpg',
            twitter: 'https://twitter.com/raulitojordan',
            github: 'https://github.com/rauljordan',
        },
        {
            name: 'Terence Tsao',
            bio: 'Previous 7+ years of software engineering. Software engineer at Riverbed and Cisco. Experienced in ML, Python, Golang and system architecture.',
            photo: 'terence1.png',
            twitter: 'https://twitter.com/terencechain',
            github: 'https://github.com/terencechain',
        },
        {
            name: 'Nishant Das',
            bio: 'Previously 2+ years of Software Engineering. Experienced in Golang, Javascript and Python with a background in Quantitative Finance.',
            photo: 'nishant1.jpg',
            twitter: 'https://twitter.com/n1shantd',
            github: 'https://github.com/nisdas',
        },
        {
            name: 'Ivan Martinez',
            bio: 'Previously 2+ years of Software Engineering. Full-stack Web3 developer, Golang Ethereum developer, previously at Zeppelin and AuroraDAO (IDEX).',
            photo: 'ivan.jpg',
            twitter: 'https://twitter.com/0xKiwi_',
            github: 'https://github.com/0xKiwi',
        },
        {
            name: 'Shay Zluf',
            bio: 'Full-stack developer, Golang Ethereum developer. 15+ years professional software engineering experience. Previously software development team lead in a production grade blockchain project.',
            photo: 'shay.jpg',
            twitter: 'https://twitter.com/shayzluf',
            github: 'https://github.com/shayzluf',
        },
    ];

    constructor() {

    }

}
