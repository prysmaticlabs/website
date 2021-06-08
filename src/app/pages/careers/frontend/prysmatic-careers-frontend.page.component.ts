import { Component } from '@angular/core';
import { JobPost } from '../../../models/job-post';

@Component({
  selector: 'prysmatic-careers-sdet',
  template: `
      <prysmatic-job-post [post]="post"></prysmatic-job-post>
    `,
})
export class PrysmaticCareersFrontendPageComponent {
  post: JobPost = {
    title: 'Frontend Software Engineer',
    lookingFor: 'We are looking for a remote, full-time frontend engineer with UX design experience to work on all user-facing components and help us push the envelope on decentralized technologies. Particularly, an engineer that has experience also designing interfaces is a huge plus.',
    requirements: [
      'Significant experience as a frontend engineer, having worked on a team, participated in the design and code review process',
      'Experience in Typescript',
      'Experience in software quality assurance (QA) as part of the software release process',
    ],
    bonus: [
      'Experience in UX and Web Design',
      'Experience in Angular web development',
      'Experience in building dapps on Ethereum',
    ],
    oneMonth: [
      'Learned about the Ethereum blockchain’s internals, its roadmap, and the internals of our flagship project, Prysm, which will serve as the backbone for Ethereum’s next big upgrade',
      'Learned about our entire frontend components such as the Prysm web interface',
      'Participated with other teammates in ideation for the future of Prysmatic Labs\' branding, front-end design, and user-facing products',
    ],
    threeMonths: [
      'Have taken ownership of our user-facing applications through maintainable code with good tests, documentation, and clear design principle',
      'Built critical features and shipped them for the Prysm web interface',
      'Optimized mission-critical distributed and concurrent systems via data-driven methods',
    ],
    oneYear: [
      'Worked with the team on shipping the remaining aspects of the groundbreaking Ethereum 2.0 blockchain, marking an exciting milestone in modern Computer Science',
      'Shipped amazing user-facing products that our community will find useful and impactful, onboarding a larger amount of users to run our software',
    ],
  }
}
