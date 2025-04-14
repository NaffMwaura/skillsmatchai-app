import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Import RouterModule
import { CommonModule } from '@angular/common';  // Ensure CommonModule is also imported
import { FormsModule } from '@angular/forms';    // Ensure FormsModule is imported if needed

@Component({
  selector: 'app-jobseeker-dashboard',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],  // Include RouterModule here
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class JobseekerDashboardComponent {

}
