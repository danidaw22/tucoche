import { AuthInterceptorService } from './services/interceptors/auth-interceptor.service';
import { NewCocheComponent } from './dashboard/new-coche/new-coche.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { DetailAllComponent } from './dashboard/detail-all/detail-all.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './search/search.component';
import { NotFoundComponent } from './NotFound/NotFound.component';
import { DetailComponent } from './detail/detail.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NotifierModule } from 'angular-notifier';
import { AngularFireModule } from '@angular/fire';
import {
  AngularFireStorageModule,
  AngularFireStorageReference,
  AngularFireUploadTask,
} from "@angular/fire/storage";
import { environment } from "../environments/environment";
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      FooterComponent,
      MenuComponent,
      SearchComponent,
      NotFoundComponent,
      DetailComponent,
      DashboardComponent,
      LoginComponent,
      RegisterComponent,
      DetailAllComponent,
      ProfileComponent,
      NewCocheComponent,
      ContactoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxSliderModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'left',
          distance: 12,
        },
        vertical: {
          position: 'top',
          distance: 12,
          gap: 10,
        },
      }
    }),
    AngularFireModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi:true},
    { provide:JWT_OPTIONS, useValue:JWT_OPTIONS},
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
