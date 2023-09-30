import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './pages/product/product.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './shared/login/login.component';
import { SingupComponent } from './shared/singup/singup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowSingleProductComponent } from './pages/show-single-product/show-single-product.component';
import { ErrorComponent } from './pages/error/error.component';
import { AdminHomeComponent } from './Dashboard/admin-home/admin-home.component';
import { AddProductComponent } from './Dashboard/add-product/add-product.component';
import { ShowallProductComponent } from './Dashboard/showall-product/showall-product.component';
import { DeleteProductComponent } from './Dashboard/delete-product/delete-product.component';
import { UpdateProductComponent } from './Dashboard/update-product/update-product.component';
import { AddNewAdminComponent } from './Dashboard/add-new-admin/add-new-admin.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    BlogComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SingupComponent,
    ShowSingleProductComponent,
    ErrorComponent,
    AdminHomeComponent,
    AddProductComponent,
    ShowallProductComponent,
    DeleteProductComponent,
    UpdateProductComponent,
    AddNewAdminComponent,
    EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
