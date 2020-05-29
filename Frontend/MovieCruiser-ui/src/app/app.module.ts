import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './site/footer/footer.component';
import { HeaderComponent } from './site/header/header.component';
import { LoginComponent } from './site/login/login.component';
import { SignupComponent } from './site/signup/signup.component';
import { FavouritesListComponent } from './favourites/favourites-list/favourites-list.component';
import { MovieItemEditComponent } from './movies/movie-item-edit/movie-item-edit.component';
import { MovieItemInfoComponent } from './movies/movie-item-info/movie-item-info.component';
import { MovieSearchComponent } from './movies/movie-search/movie-search.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    FavouritesListComponent,
    MovieItemEditComponent,
    MovieItemInfoComponent,
    MovieSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
