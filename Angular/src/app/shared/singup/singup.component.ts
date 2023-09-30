import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
})
export class SingupComponent {
  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  registerForm = new FormGroup({
    fName: new FormControl('', [Validators.required]),
    lName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      // Validators.pattern(
      //   '(?=^.{8,}$)((?=.*d)|(?=.*W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"'
      // ),
    ]),
    age: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    gender: new FormControl('Gender', [Validators.required]),
    address: new FormControl('', [Validators.required]),
  });
  isSubmited = false;
  ErrFlag = false;
  get userEmail() {
    return this.registerForm.get('email');
  }
  get formData() {
    return this.registerForm.controls;
  }
  hundelSubmit() {
    this.isSubmited = true;
    if (this.registerForm.valid) {
      this.auth.register(this.registerForm.value).subscribe(
        (data) => {
          console.log(data);
          localStorage.setItem('token', JSON.stringify(data.data.tokens));
        },
        (err) => {
          console.log(err);
          this.ErrFlag = true;
          this.toastr.error('Email Or Password Invaled');
        },
        () => {
          this.toastr.success('SingUp Success !! Welcome');
          this.auth.isLogin = true;
          this.router.navigateByUrl('');
        }
      );
    }
    // console.log(this.registerForm);
  }
}
