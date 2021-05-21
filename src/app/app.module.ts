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
      ProfileComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
