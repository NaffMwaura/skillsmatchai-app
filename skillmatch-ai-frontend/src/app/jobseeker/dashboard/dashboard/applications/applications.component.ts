import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-applications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent {
  applications = [
    {
      jobTitle: 'Frontend Developer',
      company: 'TechVerse',
      status: 'Applied',
      appliedDate: '2025-04-01'
    },
    {
      jobTitle: 'Backend Engineer',
      company: 'CodeBridge',
      status: 'Interview',
      appliedDate: '2025-03-28'
    },
    {
      jobTitle: 'UI/UX Designer',
      company: 'PixelPoint',
      status: 'Rejected',
      appliedDate: '2025-03-15'
    }
  ];

  getStatusClass(status: string) {
    switch (status) {
      case 'Applied':
        return 'badge-applied';
      case 'Interview':
        return 'badge-interview';
      case 'Rejected':
        return 'badge-rejected';
      default:
        return '';
    }
  }
}
