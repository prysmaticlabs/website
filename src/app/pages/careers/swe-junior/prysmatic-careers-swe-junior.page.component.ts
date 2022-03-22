import { Component } from '@angular/core';
import { JobPost } from '../../../models/job-post';

@Component({
  selector: 'prysmatic-careers-swe-junior',
  template: `
      <prysmatic-job-post [post]="post"></prysmatic-job-post>
    `,
})
export class PrysmaticCareersSweJuniorPageComponent {
  post: JobPost = {
    title: 'Junior Go Software Engineer',
    lookingFor: 'We are looking for a full-time, junior Go engineer to learn how to build clean, well-tested, distributed systems code in a team environment. At Prysmatic, we are working on some of the most cutting-edge problems in distributed systems, and want to onboard more developers into learning the ins-and-outs of blockchain technology.',
    requirements: [
      'Practical experience in Go',
      'Experience working in a team environment as a software engineer',
      'Foundational understanding of Computer Science',
      'Strong grasp on engineering fundamentals, both in theory and in practice'
    ],
    bonus: [
      'Knowledge of Ethereum or blockchain-related technologies',
      'Knowledge of distributed systems and p2p networking',
    ],
    oneMonth: [
      'Learned about the Ethereum blockchain’s internals, its roadmap, and the internals of our flagship project, Prysm, which will serve as the backbone for Ethereum’s next big upgrade',
      'Participated in our code and design review process, sharing engineering insights with other teammates to ship features successfully',
    ],
    threeMonths: [
      'Have taken ownership of features from end to end on our roadmap through maintainable code with good tests, documentation, and clear design principles',
      'Contributed to our design-centric culture where writing comes first before we implement complex code',
      'Shipped features to production, used to secure the multi-billion dollar Ethereum blockchain'
    ],
    oneYear: [
      'A deep understanding of blockchain technology, cryptography, p2p networking, and systems architecture',
      'Contributed key pieces to ship the next upgrades to Ethereum with a security-first mindset',
    ],
  }
}
