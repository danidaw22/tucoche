import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './detail/detail.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './NotFound/NotFound.component'
import { SearchComponent } from './search/search.component';
import { DetailAllComponent } from './dashboard/detail-all/detail-all.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full"},
  { path: "404", component: NotFoundComponent },
  { path: "search", component: SearchComponent },
  { path:"detail/:id", component: DetailComponent},
  { path:"panel", component: DashboardComponent, children:[
    {path:"all", component: DetailAllComponent}
  ]},
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
