import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage implements OnInit {
  authMode: 'login' | 'register' = 'login';
  emailInput: string = '';
  passwordInput: string = '';
  nameFieldValue: string = '';
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private auth = inject(AuthService);

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['mode'] === 'register') {
        this.authMode = 'register';
      } else {
        this.authMode = 'login';
      }
    });
  }

  toggleAuth(mode: 'login' | 'register'): void {
    this.authMode = mode;
  }

  handleAuth(): void {
    if (this.authMode === 'register') {
      this.auth
        .register({
          name: this.nameFieldValue || 'Guest',
          email: this.emailInput,
          pass: this.passwordInput,
        })
        .subscribe({
          next: () => this.router.navigate(['/dashboard']),
          error: (err) => alert('Ошибка регистрации: ' + err.error.message),
        });
    } else {
      this.auth.login(this.emailInput, this.passwordInput).subscribe({
        next: () => this.router.navigate(['/dashboard']),
        error: (err) => alert('Неверный логин или пароль'),
      });
    }
  }
}
