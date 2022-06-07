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
            bio: 'Experienced in Golang, JavaScript / Typescript, Node.js, Java, distributed systems design, infrastructure, and systems architecture. Formerly Software Engineer at Google.',
            photo: 'preston.jpg',
            twitter: 'https://twitter.com/preston_vanloon',
            github: 'https://github.com/prestonvanloon',
        },
        {
            name: 'Raul Jordan',
            bio: 'Experienced in Golang, Javascript/Node, Machine Learning, and Ethereum Protocol Development.',
            photo: 'raul.png',
            twitter: 'https://twitter.com/rauljordaneth',
            github: 'https://github.com/rauljordan',
        },
        {
            name: 'Terence Tsao',
            bio: 'Previous software engineer at Riverbed and Cisco. Experienced in ML, Python, Golang and distributed systems design.',
            photo: 'terence1.png',
            twitter: 'https://twitter.com/terencechain',
            github: 'https://github.com/terencechain',
        },
        {
            name: 'Nishant Das',
            bio: 'Experienced in Golang, Javascript and Python with a background in Quantitative Finance.',
            photo: 'nishant1.jpg',
            twitter: 'https://twitter.com/n1shantd',
            github: 'https://github.com/nisdas',
        },
        {
            name: 'Radosław Kapka',
            bio: 'Experienced software engineer with a focus in full-stack web development and team lead working with .NET and Angular. Interested in software architecture.',
            photo: 'radek.jpg',
            github: 'https://github.com/rkapka',
        },
		{
			name: 'Clarin Dy',
			bio: 'People ops. Many years of experience in helping teams succeed operationally',
			photo: 'Clarin.jpg',
		},
        {
            name: 'James He',
            bio: 'Previously from J.P.Morgan Chase & co. Full stack engineer with experience in UX and design',
            photo: 'james.png',
            twitter: 'https://twitter.com/hesatprylabs',
            github: 'https://github.com/james-prysm'

        },
        {
            name: 'Kasey Kirkham',
            bio: 'Dedicated to building large scale data platforms and distributed systems at startups with interesting missions, including Niantic, Planet Labs, Voxy and Topsy (Prysmatic is his 5th employer with “Labs” in the name).',
            photo: 'kasey.png',
            twitter: '',
            github: 'https://github.com/kasey'
        },
		{
			name: 'Taranpreet Singh',
			bio: 'Devops wizard, years of experience with cloud provisioning and infrastructure deployments',
			photo: 'Taran.jpg',
			github: 'https://github.com/Taranpreet26311',
		},
        {
			name: 'Mick B',
			bio: 'Computer systems engineer by education, software developer and technical writer by profession. Excited to accelerate the world\'s transition to sustainable economics.',
			photo: 'mick.png',
            twitter: 'https://twitter.com/symbolpunk',
			github: 'https://github.com/symbolpunk',
		},
	{
             name: 'Matthew V Rabinowitz',
             bio: 'Advisor to the Prysmatic Lab team. 20+ years seasoned business profeessional and recovering engineer.',
             photo: 'mrabino1.png',
             twitter: 'https://twitter.com/mrabino1/',
         },
    ];

    news = [
        {
            title: 'ETH Launches its Proof of Stake Testnet',
            url: 'https://www.trustnodes.com/2022/03/10/ethereum-launches-the-final-proof-stake-testnet',
            photo: 'ethbright.png',
        },
        {
          title: 'Ethereum Foundation Grants $750,000 to Prysmatic Labs for Work on Ethereum',
          photo: 'ethgrant.png',
          url: 'https://blog.ethereum.org/2019/08/26/announcing-ethereum-foundation-and-co-funded-grants/',
          caption: 'We are today unveiling over $2M USD in Foundation-led and co-funded grant funding aimed at furthering Ethereum...',
        },
        {
            title: 'Ethereum Gets Second ETH Testnet Courtesy of Prysmatic Labs',
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
            title: 'Ethereum with Prysmatic Labs: Scaling, Sharding, Proof of Stake, Serenity Phases, and Eth Client',
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
            title: 'What is Ethereum Proof of Stake? - Preston Van Loon',
        },
        {
            url: 'https://www.youtube.com/embed/91ZAFIoha2w',
            title: 'Implementing Ethereum Proof of Stake Today',
        },
        {
            url: 'https://www.youtube.com/embed/EWEGBq165ME',
            title: 'Building a Production Ethereum Proof of Stake Client'
        },
    ];

    constructor() {

    }

}
