import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmComponent } from './film/film.component';
import { HomeComponent } from './home/home.component';
import { SalleComponent } from './salle/salle.component';

const routes: Routes = [
  {path : "", redirectTo: '/home', pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "salle", component: SalleComponent},
  {path: "film", component: FilmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
