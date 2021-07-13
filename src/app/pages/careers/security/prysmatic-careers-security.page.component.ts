import { Component } from '@angular/core';
import { JobPost } from '../../../models/job-post';

@Component({
    selector: 'prysmatic-careers-security',
    template: `
      <prysmatic-job-post [post]="post"></prysmatic-job-post>
    `,
})
export class PrysmaticCareersSecurityPageComponent {
    post: JobPost = {
        title: 'Embedded Security Engineer',
        lookingFor: 'We are looking for a remote, full-time embedded security engineer to keep pushing the envelope on decentralized technologies. Particularly, having experience in penetration testing and Golang is a huge plus.',
        requirements: [
          'Experience in security and/or penetration testing',
          'Significant experience as a software engineer, having worked on a team, participated in the design and code review process, and having not only shipped products, but successfully landed them',
          'Foundational understanding of Computer Science and a strong grasp on fundamentals, both in theory and in practice',
        ],
        bonus: [
          'Experience in Golang',
          'Knowledge of Ethereum or blockchain-related technologies',
          'Deeper knowledge of the internals and limitations of Golang',
          'Knowledge of computer networking and p2p networking',
        ],
        oneMonth: [
          'Learned about the Ethereum blockchain’s internals, its roadmap, and the internals of our flagship project, Prysm, which will serve as the backbone for Ethereum’s next big upgrade',
          'Worked on threat modeling our software within the scope of the Ethereum proof of stake network',
          'Participated with other teammates in being the first line of defense against network failures, outages, and unexpected scenarios using instrumentation and best practices',
        ],
        threeMonths: [
          'Performed significant security analysis and improvements to our codebase',
          'Improved the robustness of mission-critical distributed and concurrent systems in our application',
          'Have taken ownership of several features from end to end on our roadmap through maintainable code with good tests, documentation, and clear design principles',
        ],
        oneYear: [
          'A deeper understanding of blockchain technology, cryptography, p2p networking, and systems architecture',
          'Mentored future team-members, junior developers, and external contributors; helping them level up technically',
          'Worked with the team to ship the next upgrades to Ethereum with a security-first mindset',
        ],
    }
}
