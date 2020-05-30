import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './site/login/login.component';
import { SignupComponent } from './site/signup/signup.component';
import { MovieItemInfoComponent } from './movies/movie-item-info/movie-item-info.component';
import { MovieSearchComponent } from './movies/movie-search/movie-search.component';
import { FavouritesListComponent } from './favourites/favourites-list/favourites-list.component';
import { AuthGuard } from './site/auth.guard';
import { MovieItemEditComponent } from './movies/movie-item-edit/movie-item-edit.component';


const routes: Routes = [
  {path: 'movies', component: MovieSearchComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signUp', component: SignupComponent},
  {path: 'movie-item-info', component: MovieItemInfoComponent},
  {path: 'favourites', component: FavouritesListComponent,canActivate:[AuthGuard]},
  {path: 'movie-item-edit/:id', component: MovieItemEditComponent,canActivate:[AuthGuard]},
  {path: '', redirectTo: 'movies', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
