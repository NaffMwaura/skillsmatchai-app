import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobService } from './job.service';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {
  jobService = inject(JobService); // ✅ Correct way for standalone component
  jobs = this.jobService.getJobs();
}
