import { Component } from '@angular/core';
import { faEthereum, faMedium, faGitter, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faComments } from '@fortawesome/free-regular-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
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
            bio: 'Previously 5+ years of software engineering. Experienced in Golang, Javascript/Node, Machine Learning, and Ethereum Protocol Development.',
            photo: 'raul.png',
            twitter: 'https://twitter.com/raulitojordan',
            github: 'https://github.com/rauljordan',
        },
        {
            name: 'Terence Tsao',
            bio: 'Previous 11+ years of hardware and software engineering. Previous software engineer at Riverbed and Cisco. Experienced in ML, Python, Golang and distributed systems design.',
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
            bio: 'Previously 3+ years of Software Engineering. Full-stack Web3 developer, Golang Ethereum developer, previously at AuroraDAO (IDEX).',
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
        {
            name: 'Victor Farazdagi',
            bio: 'Software engineer and aspiring mathematician. Experienced in Golang, Python, and machine learning. Research interests include distributed systems, communication protocols, and anonymity.',
            photo: 'victor.jpg',
            twitter: 'https://twitter.com/farazdagi',
            github: 'https://github.com/farazdagi',
        },
        {
            name: 'Celeste Seberras',
            bio: 'ETH2 Technical Writer, Infomation Security Engineer. 7+ years in penetration testing, applied cryptography and webdev. Previously wrote documentation for the Tor Project. Deployed multiple online startups.',
            photo: 'celeste.jpg',
            twitter: 'https://twitter.com/har00ga',
            github: 'https://github.com/har00ga',
        },
        {
            name: 'Radosław Kapka',
            bio: '6 years of professional software development experience, mostly as a full-stack web developer and team lead working with .NET and Angular. Interested in software architecture.',
            photo: 'radek.jpg',
            github: 'https://github.com/rkapka',
        },
    ];

    news = [
        {
            title: 'Home.News.Items.EthereumFoundationGrant.Title',
            photo: 'ethgrant.png',
            url: 'https://blog.ethereum.org/2019/08/26/announcing-ethereum-foundation-and-co-funded-grants/',
            caption: 'Home.News.Items.EthereumFoundationGrant.Caption',
        },
        {
            title: 'Home.News.Items.Casper.Title',
            photo: 'ethbright.png',
            url: 'https://cryptoslate.com/casper-proof-of-stake-ethereum-live-on-the-prysm-testnet/',
            caption: 'Home.News.Items.Casper.Caption',
        },
        {
            title: 'Home.News.Items.TestnetCourtesy.Title',
            photo: 'blockonomi.png',
            url: 'https://blockonomi.com/ethereum-eth-2-0-testnet/',
            caption: 'Home.News.Items.TestnetCourtesy.Caption',
        },
        {
            title: 'Home.News.Items.WaveIVGrant.Title',
            photo: 'ethanalysis.png',
            url: 'https://blog.ethereum.org/2018/10/15/ethereum-foundation-grants-update-wave-4/',
            caption: 'Home.News.Items.WaveIVGrant.Caption',
        },
    ];

    podcasts = [
        {
            host: 'Home.Podcasts.Items.SoftwareEngineeringDaily.Host',
            title: 'Home.Podcasts.Items.SoftwareEngineeringDaily.Title',
            url: 'https://softwareengineeringdaily.com/2018/06/01/scaling-ethereum-with-raul-jordan-and-preston-van-loon/',
        },
        {
            host: 'Home.Podcasts.Items.IntoTheEther.Host',
            title: 'Home.Podcasts.Items.IntoTheEther.Title',
            url: 'https://podcasts.apple.com/au/podcast/ethereum-2-0-prysmatic-labs-scaling-sharding-proof/id1443920565?i=1000425654959',
        },
        {
            host: 'Home.Podcasts.Items.ZeroKnowledgePodcast.Host',
            title: 'Home.Podcasts.Items.ZeroKnowledgePodcast.Title',
            url: 'https://www.zeroknowledge.fm/37',
        },
        {
            host: 'Home.Podcasts.Items.OffTheChain.Host',
            title: 'Home.Podcasts.Items.OffTheChain.Title',
            url: 'https://podtail.com/en/podcast/off-the-chain/preston-van-loon-co-founder-of-prysmatic-labs-the-/',
        }
    ];

    videos = [
        {
            url: 'https://www.youtube.com/embed/ep2R0e_Cc5w',
            title: 'Home.Videos.Items.WhatIsEthereum.Title',
        },
        {
            url: 'https://www.youtube.com/embed/91ZAFIoha2w',
            title: 'Home.Videos.Items.ImplementingEthereum.Title',
        },
        {
            url: 'https://www.youtube.com/embed/EWEGBq165ME',
            title: 'Home.Videos.Items.BuildingAClient.Title'
        },
    ];

    constructor(translate: TranslateService) {
        let keys = this.news.map(x => x.title)
            .concat(
                this.news.map(x => x.caption),
                this.podcasts.map(x => x.host),
                this.podcasts.map(x => x.title),
                this.videos.map(x => x.title));

        translate.get(keys).subscribe((translations: Object) => {
            this.news.forEach(x => {
                x.title = translations[x.title];
                x.caption = translations[x.caption];
            })
            this.podcasts.forEach(x => {
                x.host = translations[x.host];
                x.title = translations[x.title];
            })
            this.videos.forEach(x => x.title = translations[x.title]);
        })
    }
}
