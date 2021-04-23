import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './NotFound/NotFound.component'
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full"},
  { path: "404", component: NotFoundComponent },
  { path: "search", component: SearchComponent },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
