import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root' // This makes it globally injectable
})
export class AuthService {

  isRecruiter(signUpData: any): boolean {
    // This can be refined based on your signup form logic (e.g., company-related fields)
    return signUpData.companyName && signUpData.companyWebsite;
  }


  private role: 'jobseeker' | 'recruiter' | null = null;

  constructor(private router: Router) {}

  login(role: 'jobseeker' | 'recruiter') {
    this.role = role;
    localStorage.setItem('userRole', role);
    if (role === 'jobseeker') {
      console.log('Redirecting to jobseeker dashboard...');

      this.router.navigate(['/jobseeker/dashboard']);
    } else {
      console.log('Redirecting to recruiter dashboard...');

      this.router.navigate(['/recruiter/dashboard']);
    }
  }

  logout() {
    this.role = null;
    localStorage.removeItem('userRole');
    this.router.navigate(['/']);
  }

  getUserRole(): 'jobseeker' | 'recruiter' | null {
    return this.role || (localStorage.getItem('userRole') as 'jobseeker' | 'recruiter' | null);
  }
}
