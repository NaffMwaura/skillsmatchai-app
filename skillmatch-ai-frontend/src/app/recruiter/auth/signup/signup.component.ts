import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class RecruiterSignUpComponent {


  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signUpForm = this.fb.group({
      fullName: ['', Validators.required],
      companyName: ['', Validators.required],
      companyWebsite: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });
  }


  onSubmit() {
    if (this.signUpForm.valid) {
      const password = this.signUpForm.get('password')?.value;
      const confirmPassword = this.signUpForm.get('confirmPassword')?.value;
  
      // Check if passwords match
      if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
      }
  
      console.log(this.signUpForm.value);
      // Ideally: send data to backend here
  
      // After successful signup, login based on role (you can pass the role dynamically if needed)
      if (this.authService.isRecruiter(this.signUpForm.value)) {
        this.authService.login('recruiter'); // 👈 Redirects to /recruiter/dashboard
      } else {
        this.authService.login('jobseeker'); // 👈 Redirects to /jobseeker/dashboard
      }
    }
  }
} 
