import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  products: any;
  loadingFlag = true;
  constructor(private globle: AuthService, private router: Router) {
    this.globle.gotPodects().subscribe(
      (res) => {
        this.products = res;
      },
      (err) => {
        console.log(err);
        router.navigateByUrl('error');
      },
      () => {
        this.loadingFlag = false;
      }
    );
  }
}
