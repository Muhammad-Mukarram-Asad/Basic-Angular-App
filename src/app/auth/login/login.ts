import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  constructor(private router: Router) {}

  username: string = '';
  password: string = '';
  submitted = false;
  loginFailed = false;

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.submitted = true;
      this.loginFailed = false;
      console.log('Login data:', form.value);
      // route to dashboard:
      this.router.navigate(['/dashboard']);
    }
    else
    {
      this.loginFailed = true;
    }
  }
}
