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
            title: 'Eth2 Mainnet Deposit Contract Released',
            photo: 'ethbright.png',
            url: 'https://blog.ethereum.org/2020/11/04/eth2-quick-update-no-19/',
            caption: 'Phase 0 of eth2 is scheduled to launch December 2020, with the deposit contract now live...',
        },
        {
          title: 'Ethereum Foundation Grants $750,000 to Prysmatic Labs for Work on Ethereum 2.0',
          photo: 'ethgrant.png',
          url: 'https://blog.ethereum.org/2019/08/26/announcing-ethereum-foundation-and-co-funded-grants/',
          caption: 'We are today unveiling over $2M USD in Foundation-led and co-funded grant funding aimed at furthering Ethereum 2.0...',
        },
        {
            title: 'Ethereum Gets Second ETH 2.0 Testnet Courtesy of Prysmatic Labs',
            photo: 'blockonomi.png',
            url: 'https://blockonomi.com/ethereum-eth-2-0-testnet/',
            caption: 'Prysmatic Labs, the team developing the “Prysm” Ethereum sharding client, have released a testnet...',
        },
        {
            title: 'Prysmatic Labs Awarded $500,000 from the Ethereum Foundation Wave IV Grants',
            photo: 'ethanalysis.png',
            url: 'https://blog.ethereum.org/2018/10/15/ethereum-foundation-grants-update-wave-4/',
            caption: 'As we go full steam ahead to Devcon 4, we’re back to announce Wave 4 of the Grants Program...',
        },
    ];

    podcasts = [
        {
            host: 'Software Engineering Daily',
            title: 'Scaling Ethereum with Raul Jordan and Preston Van Loon',
            url: 'https://softwareengineeringdaily.com/2018/06/01/scaling-ethereum-with-raul-jordan-and-preston-van-loon/',
        },
        {
            host: 'Into the Ether',
            title: 'Ethereum 2.0 with Prysmatic Labs: Scaling, Sharding, Proof of Stake, Serenity Phases, and Eth 2.0 Client',
            url: 'https://podcasts.apple.com/au/podcast/ethereum-2-0-prysmatic-labs-scaling-sharding-proof/id1443920565?i=1000425654959',
        },
        {
            host: 'Zero Knowledge Podcast',
            title: 'Sharding Update With Prysmatic Labs',
            url: 'https://www.zeroknowledge.fm/37',
        },
        {
            host: 'Off the Chain',
            title: 'Preston Van Loon, Co-Founder of Prysmatic Labs: The Plan to Scale Ethereum',
            url: 'https://podtail.com/en/podcast/off-the-chain/preston-van-loon-co-founder-of-prysmatic-labs-the-/',
        }
    ];

    videos = [
        {
            url: 'https://www.youtube.com/embed/ep2R0e_Cc5w',
            title: 'What is Ethereum 2.0? - Preston Van Loon',
        },
        {
            url: 'https://www.youtube.com/embed/91ZAFIoha2w',
            title: 'Implementing Ethereum 2.0 Today',
        },
        {
            url: 'https://www.youtube.com/embed/EWEGBq165ME',
            title: 'Building a Production Ethereum 2.0 Client'
        },
    ];

    constructor() {

    }

}
