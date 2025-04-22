import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class AdminDashboardComponent {
  // Bar Chart - Users
  usersBarChart: ChartConfiguration<'bar'>['data'] = {
    labels: ['Job Seekers', 'Recruiters'],
    datasets: [{ label: 'Users', data: [120, 45], backgroundColor: ['#42A5F5', '#66BB6A'] }]
  };

  // Doughnut Chart - Job Postings
  jobsDoughnutChart: ChartConfiguration<'doughnut'>['data'] = {
    labels: ['Active', 'Closed'],
    datasets: [{ data: [85, 40], backgroundColor: ['#FFA726', '#EF5350'] }]
  };

  // Line Chart - Platform Activity
  activityLineChart: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      { data: [30, 50, 40, 60, 70], label: 'Applications', borderColor: '#42A5F5', fill: false },
      { data: [5, 15, 10, 20, 25], label: 'Interviews', borderColor: '#66BB6A', fill: false },
      { data: [2, 5, 4, 7, 10], label: 'Hires', borderColor: '#FFA726', fill: false }
    ]
  };
}
