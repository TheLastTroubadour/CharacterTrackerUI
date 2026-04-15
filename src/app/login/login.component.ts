import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  error: string | null = null;

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  login() {
    const {username, password} = this.loginForm.getRawValue();
    this.authService.login({username: username ?? '', password: password ?? ''}).subscribe({
      next: () => this.router.navigate(['/characters']),
      error: () => this.error = 'Invalid username or password.',
    });
  }
}
