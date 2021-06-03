import { ListFavoritosComponent } from './dashboard/list-favoritos/list-favoritos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NewCocheComponent } from './dashboard/new-coche/new-coche.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './detail/detail.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './NotFound/NotFound.component'
import { SearchComponent } from './search/search.component';
import { DetailAllComponent } from './dashboard/detail-all/detail-all.component';
import { AuthGuardService } from './services/auth/auth-guard.service';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full"},
  { path: "404", component: NotFoundComponent },
  { path: "search", component: SearchComponent },
  { path:"detail/:id", component: DetailComponent},
  { path:"contacto", component:ContactoComponent},
  { path:"panel", component: DashboardComponent,canActivate:[AuthGuardService], children:[
    {path:"",redirectTo:"all",pathMatch:"full"},
    {path:"all", component: DetailAllComponent},
    {path:"perfil", component:ProfileComponent},
    {path:"coche/detail", component:NewCocheComponent},
    {path:"coche/detail/:id",component:NewCocheComponent},
    {path:"favoritos",component:ListFavoritosComponent}
  ]},
  { path:"login", component: LoginComponent},
  { path:"register", component: RegisterComponent},
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
