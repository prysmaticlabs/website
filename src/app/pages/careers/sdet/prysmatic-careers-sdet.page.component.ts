import { Component } from '@angular/core';
import { JobPost } from '../../../models/job-post';

@Component({
  selector: 'prysmatic-careers-sdet',
  template: `
      <prysmatic-job-post [post]="post"></prysmatic-job-post>
    `,
})
export class PrysmaticCareersSdetPageComponent {
    post: JobPost = {
        title: 'Software Development Engineer in Test (SDET)',
        lookingFor: 'We are looking for a remote, full-time Software Development Engineer in Test (SDET) to keep pushing the envelope on decentralized technologies. Particularly, having experience in infrastructure, devops, and deployments of software in critical functions.',
        requirements: [
          'Significant experience as a software engineer, having worked on a team, participated in the design and code review process, and having not only shipped products, but successfully landed them',
          'Significant experience in writing tests for code, such as unit tests, integration tests, etc.',
          'Experience in software deployment, continuous integration and delivery (CI/CD) in cloud environments',
          'Experience in software quality assurance (QA) as part of the software release process',
        ],
        bonus: [
          'Knowledge of Kubernetes',
          'Knowledge of Ethereum or blockchain-related technologies',
          'Knowledge of computer networking and p2p networking',
        ],
        oneMonth: [
          'Learned about the Ethereum blockchain’s internals, its roadmap, and the internals of our flagship project, Prysm, which will serve as the backbone for Ethereum’s next big upgrade',
          ' Learned about out software release process from start to finish and identified gaps where our process can become futureproof',
          'Improved our CI/CD pipelines for greater developer experience and safer delivery',
        ],
        threeMonths: [
          'Have taken ownership of our deployment process, introduced further automations to reduce the possibility of human error',
          'Built enhanced monitoring systems to improve our on-call infrastructure and how we monitor performance of our code in production and pre-production environments across releases',
          'Written extensive tests for mission-critical distributed and concurrent systems',
        ],
        oneYear: [
          'Shipped the next phases of the live, 2.0 Ethereum blockchain with proof of stake and sharding to production, marking one of the most exciting milestones in modern Computer Science',
          'A deeper understanding of blockchain technology, cryptography, p2p networking, and systems architecture',
          'Mentored future team-members, junior developers, and external contributors; helping them level up technically',
          'Established Prysmatic Labs as a leader in how we ship software and engage with users to ensure quality',
        ],
    }
}
