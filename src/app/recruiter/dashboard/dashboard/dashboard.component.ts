import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // For routing links

@Component({
  selector: 'app-recruiter-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],  // Import RouterModule for sub-routing links
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class RecruiterDashboardComponent {

  showDropdown = false;

toggleDropdown() {
  this.showDropdown = !this.showDropdown;
}

  // You can add any recruiter-specific logic here
}
