import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guidance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guidance.component.html',
  styleUrls: ['./guidance.component.css']
})
export class GuidanceComponent {
  suggestions = [
    {
      title: 'Frontend Developer',
      description: 'Your CV suggests strong experience in frontend technologies like React and Angular.',
      action: 'Consider applying for roles focused on React.js or Angular development.'
    },
    {
      title: 'UI/UX Designer',
      description: 'Your CV highlights excellent skills in design tools and user experience methodologies.',
      action: 'Explore opportunities as a UI/UX designer or visual designer.'
    },
    {
      title: 'Backend Engineer',
      description: 'You have a solid understanding of server-side technologies and cloud platforms.',
      action: 'Look for roles focused on backend frameworks like Node.js or Django.'
    }
  ];
}
