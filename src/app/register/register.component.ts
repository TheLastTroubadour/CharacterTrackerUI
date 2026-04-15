import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  error: string | null = null;

  registerForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  register() {
    const {username, email, password} = this.registerForm.getRawValue();
    this.authService.register({
      username: username ?? '',
      email: email ?? '',
      password: password ?? '',
    }).subscribe({
      next: () => this.router.navigate(['/characters']),
      error: () => this.error = 'Registration failed. Username or email may already be taken.',
    });
  }
}
