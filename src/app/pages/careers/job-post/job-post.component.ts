import { Component, Input } from '@angular/core';
import { JobPost } from '../../../models/job-post';

@Component({
  selector: 'prysmatic-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.css']
})
export class JobPostComponent {
  @Input() post: JobPost;
  constructor() {
  }
}
