import { Component } from '@angular/core';
import { JobPost } from '../../../models/job-post';

@Component({
  selector: 'prysmatic-careers-swe',
  template: `
      <prysmatic-job-post [post]="post"></prysmatic-job-post>
    `,
})
export class PrysmaticCareersSwePageComponent {
  post: JobPost = {
    title: 'Senior Go Software Engineer',
    lookingFor: 'We are looking for a full-time, senior Go engineer to solve hard problems in a highly-collaborative environment. At Prysmatic Labs, we are tackling some of the hardest, unsolved research problems in distributed systems, and this role will be at front-and-center of these challenges.',
    requirements: [
      'Extensive, practical experience in Go',
      'Significant experience as a software engineer, having worked on a team, participated in the design and code review process, and having not only shipped products, but successfully landed them',
      'Foundational understanding of Computer Science and a strong grasp on fundamentals, both in theory and in practice',
    ],
    bonus: [
      'Knowledge of Ethereum or blockchain-related technologies',
      'Deep knowledge of the internals and limitations of Golang as a language',
      'Knowledge of distributed systems and p2p networking',
    ],
    oneMonth: [
      'Learned about the Ethereum blockchain’s internals, its roadmap, and the internals of our flagship project, Prysm, which will serve as the backbone for Ethereum’s next big upgrade',
      'Participated in our code and design review process, sharing engineering insights with other teammates to ship features successfully',
    ],
    threeMonths: [
      'Have taken ownership of several features from end to end on our roadmap through maintainable code with good tests, documentation, and clear design principles',
      'Contributed to our design-centric culture where writing comes first before we implement complex code',
      'Shipped features to production, used to secure the multi-billion dollar Ethereum blockchain'
    ],
    oneYear: [
      'A deep understanding of blockchain technology, cryptography, p2p networking, and systems architecture',
      'Mentored future team-members, junior developers, and external contributors; helping them level up technically',
      'Contributed key pieces to ship the next upgrades to Ethereum with a security-first mindset',
    ],
  }
}
