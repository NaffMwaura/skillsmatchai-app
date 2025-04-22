import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  getJobs() {
    return [
      {
        title: 'Frontend Developer',
        company: 'TechVerse',
        location: 'Nairobi, Kenya',
        type: 'Full-Time',
        match: '87%'
      },
      {
        title: 'Backend Engineer',
        company: 'CodeBridge',
        location: 'Remote',
        type: 'Part-Time',
        match: '75%'
      },
      {
        title: 'UI/UX Designer',
        company: 'PixelPoint',
        location: 'Mombasa, Kenya',
        type: 'Contract',
        match: '90%'
      }
    ];
  }
}
