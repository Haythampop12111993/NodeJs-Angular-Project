import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './pages/product/product.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './shared/login/login.component';
import { SingupComponent } from './shared/singup/singup.component';
import { ShowSingleProductComponent } from './pages/show-single-product/show-single-product.component';
import { ErrorComponent } from './pages/error/error.component';
import { AdminHomeComponent } from './Dashboard/admin-home/admin-home.component';
import { AddNewAdminComponent } from './Dashboard/add-new-admin/add-new-admin.component';
import { ShowallProductComponent } from './Dashboard/showall-product/showall-product.component';
import { AddProductComponent } from './Dashboard/add-product/add-product.component';
import { DeleteProductComponent } from './Dashboard/delete-product/delete-product.component';
import { UpdateProductComponent } from './Dashboard/update-product/update-product.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { canActivateGuard } from './guards/can-activate/can-activate.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'product',
    children: [
      { path: '', component: ProductComponent },
      { path: 'showSingleProduct', component: ShowSingleProductComponent },
    ],
  },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'singup', component: SingupComponent },
  {
    path: 'editprofile',
    component: EditProfileComponent,
    canActivate: [canActivateGuard],
  },
  {
    path: 'admin',
    children: [
      { path: '', component: AdminHomeComponent },
      { path: 'addNewAdmin', component: AddNewAdminComponent },
      { path: 'addProduct', component: AddProductComponent },
      { path: 'showallProduct', component: ShowallProductComponent },
      { path: 'deleteproduct', component: DeleteProductComponent },
      { path: 'updateproduct', component: UpdateProductComponent },
    ],
  },
  {
    path: '**',
    children: [
      { path: '', component: ErrorComponent },
      { path: 'error', component: ErrorComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
