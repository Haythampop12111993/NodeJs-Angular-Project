import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent {
  profile = new FormGroup({
    fName: new FormControl(''),
    lName: new FormControl(''),
    phone: new FormControl(''),
  });
  constructor(private auth: AuthService) {
    this.auth.userProfile().subscribe((res) => {
      console.log(res);
    });
  }
}
