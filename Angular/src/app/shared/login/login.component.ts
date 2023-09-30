import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/interface/login';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.auth;
  }
  loginData: Login = {
    email: '',
    password: '',
  };
  handleSubmit(from: NgForm) {
    if (from.valid) {
      this.auth.login(this.loginData).subscribe((res) => {
        console.log(res);
        if (res.apiStatus)
          localStorage.setItem('token', JSON.stringify(res.data.tokens));
        this.toastr.success('Login !! Welcome');
        this.auth.isLogin = true;
        this.router.navigateByUrl('/');
      });
    }
  }
}
