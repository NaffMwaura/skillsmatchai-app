import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-applications',
  standalone: true,
  imports: [CommonModule],  // Only import CommonModule
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent {
  applications = [
    { jobTitle: 'Frontend Developer', status: 'Pending' },
    { jobTitle: 'Backend Developer', status: 'Interview Scheduled' },
    { jobTitle: 'UI/UX Designer', status: 'Rejected' }
  ];

  getStatusBadge(status: string): string {
    switch (status) {
      case 'Pending': return 'badge-pending';
      case 'Interview Scheduled': return 'badge-scheduled';
      case 'Rejected': return 'badge-rejected';
      default: return '';
    }
  }
}
