import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';  // Landing page
import { JobSeekerSignUpComponent } from './jobseeker/auth/signup/signup.component';  // Job Seeker Sign Up
import { LoginComponent } from './jobseeker/auth/login/login.component';  // Job Seeker Login
import { RecruiterSignUpComponent } from './recruiter/auth/signup/signup.component';  // Recruiter Sign Up
import { RecruiterLoginComponent } from './recruiter/auth/login/login.component';  // Recruiter Login
import { JobseekerDashboardComponent } from './jobseeker/dashboard/dashboard/dashboard.component';  // Job Seeker Dashboard
import { RecruiterDashboardComponent } from './recruiter/dashboard/dashboard/dashboard.component';  // Recruiter Dashboard
import { OverviewComponent } from './jobseeker/dashboard/dashboard/overview/overview.component';
import { AdminDashboardComponent } from './admin/dashboard/dashboard.component';



// Sub-routes for Job Seeker Dashboard
import { CvComponent } from './jobseeker/dashboard/dashboard/cv/cv.component';  // CV Component
import { JobsComponent } from './jobseeker/dashboard/dashboard/jobs/jobs.component';
import { ApplicationsComponent } from './jobseeker/dashboard/dashboard/applications/applications.component';  // Applications Tracker Component
import { GuidanceComponent } from './jobseeker/dashboard/dashboard/guidance/guidance.component';  // Career Guidance Component
import { JobPostingsComponent } from './recruiter/dashboard/dashboard/job-postings/job-postings.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },  // Landing Page
  { path: 'jobseeker/signup', component: JobSeekerSignUpComponent },  // Job Seeker Sign Up
  { path: 'jobseeker/login', component: LoginComponent },  // Job Seeker Login

  // Job Seeker Dashboard with sub-routes
  {
    path: 'jobseeker/dashboard',
    component: JobseekerDashboardComponent,
    children: [
      { path: '', redirectTo: 'cv', pathMatch: 'full' },  // Default sub-route
      { path: 'cv', component: CvComponent },  // CV Management
      { path: 'jobs', component: JobsComponent },  // Jobs List
      { path: 'applications', component: ApplicationsComponent },  // Applications Tracker
      { path: 'guidance', component: GuidanceComponent } , // Career Guidance
      { path: 'overview', component: OverviewComponent }  // Career Guidance

    ]
  },

  { path: 'recruiter/signup', component: RecruiterSignUpComponent },  // Recruiter Sign Up
  { path: 'recruiter/login', component: RecruiterLoginComponent },  // Recruiter Login

  // Recruiter Dashboard (can add sub-routes if needed)
  { path: 'recruiter/dashboard',
   component: RecruiterDashboardComponent,
   children: [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'overview', component: OverviewComponent },
    { path: 'job-postings', component: JobPostingsComponent },
    { path: 'applications', component: ApplicationsComponent }
  ]
  },
  { 
    path: 'admin/dashboard', 
    component: AdminDashboardComponent 
  },
  

  { path: '**', redirectTo: '' }  // Redirect unknown routes to landing page
];


