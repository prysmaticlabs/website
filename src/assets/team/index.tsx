import * as RaulImage from './Raul.jpeg';
import * as PrestonImage from './Preston.jpeg';
import * as EnriqueImage from './Enrique.jpeg';
import * as TerenceImage from './Terence.png';
import * as SylvainImage from './Sylvain.jpeg';
import * as NishantImage from './Nishant.jpg';
import * as YutaroImage from './Yutaro.jpeg';

export interface TeamMember {
  image: string;
  github: string;
  name: string;
  title: string|null;
  description: string;
}

const team: TeamMember[] = [
  {
    image: RaulImage,
    github: 'https://github.com/rauljordan',
    name: 'Raul Jordan',
    title: 'Team Lead',
    description: 'Thiel Fellow & Ethereum Dev'
  },
  {
    image: PrestonImage,
    github: 'https://github.com/prestonvanloon',
    name: 'Preston Van Loon',
    title: 'Team Lead',
    description: 'Software Engineer @GoogleNYC & Ethereum Dev'
  },
  {
    image: EnriqueImage,
    github: 'https://github.com/enriquefynn',
    name: 'Enrique Finn',
    title: null,
    description: 'Ph.D Candidate in Distributed Systems & Ethereum Dev'
  },
  {
    image: TerenceImage,
    github: 'https://github.com/terenc3t',
    name: 'Terence Tsao',
    title: null,
    description: 'Software Engineer @Riverbed & Ethereum Dev'
  },
  {
    image: SylvainImage,
    github: 'https://github.com/Magicking',
    name: 'Sylvain Laurent',
    title: null,
    description: 'Blockchain Engineer'
  },
  {
    image: NishantImage,
    github: 'https://github.com/nisdas',
    name: 'Nishant Das',
    title: null,
    description: 'Ethereum Dev'
  },
  {
    image: YutaroImage,
    github: 'https://github.com/rawfalafel',
    name: 'Yutaro Mori',
    title: null,
    description: 'Ethereum Dev'
  }
];

export default team;