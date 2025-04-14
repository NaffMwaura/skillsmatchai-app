import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-postings',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Ensure CommonModule is included here
  templateUrl: './job-postings.component.html',
  styleUrls: ['./job-postings.component.css']
})
export class JobPostingsComponent {
  searchTerm: string = '';
  jobs: { title: string; description: string; location: string }[] = [];

  newJob = {
    title: '',
    description: '',
    location: ''
  };

  filteredJobs() {
    return this.jobs.filter(job =>
      job.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  createJob() {
    if (this.newJob.title && this.newJob.description && this.newJob.location) {
      this.jobs.push({ ...this.newJob });
      this.newJob = { title: '', description: '', location: '' };
    }
  }

  deleteJob(jobToDelete: any) {
    this.jobs = this.jobs.filter(job => job !== jobToDelete);
  }
}
