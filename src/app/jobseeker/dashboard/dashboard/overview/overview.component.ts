import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuidanceComponent } from '../guidance/guidance.component'; // Import Guidance
import { ApplicationsComponent } from '../applications/applications.component'; // Import Applications

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, GuidanceComponent, ApplicationsComponent],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent{
  cvUploaded = false; // Change this based on your actual file upload status

  jobApplications = [
    { status: 'Applied' },
    { status: 'Interview' },
    { status: 'Rejected' },
    { status: 'Applied' }
  ];

  getApplicationStats(status: string) {
    return this.jobApplications.filter(app => app.status === status).length;
  }
}
