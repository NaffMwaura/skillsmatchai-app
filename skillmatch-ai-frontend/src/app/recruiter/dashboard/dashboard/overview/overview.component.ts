import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-recruiter-overview',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class RecruiterOverviewComponent {
  stats = {
    applications: 87,
    interviews: 12,
    hires: 3,
    applied: 50,
    shortlisted: 25,
    rejected: 12
  };

  doughnutChartData: ChartConfiguration<'doughnut'>['data'] = {
    labels: ['Applications', 'Interviews', 'Hires'],
    datasets: [{
      data: [this.stats.applications, this.stats.interviews, this.stats.hires],
      backgroundColor: ['#4caf50', '#ff9800', '#2196f3'],
    }]
  };
}
