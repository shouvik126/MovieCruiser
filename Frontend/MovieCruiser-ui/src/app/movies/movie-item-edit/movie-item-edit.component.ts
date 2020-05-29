import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-item-edit',
  templateUrl: './movie-item-edit.component.html',
  styleUrls: ['./movie-item-edit.component.css']
})
export class MovieItemEditComponent implements OnInit {

  movie:Movie;
  movieId:number;
  editMovieForm:FormGroup;
  movieEdited = false;
  constructor(
    private route: ActivatedRoute,
    private movieService:MovieService
  ) { }

  ngOnInit(): void {
    this.movieId = this.route.snapshot.params['id'];
    this.movie = this.movieService.getMovieItemById(this.movieId);
    console.log("yoyo -> "+this.movie.dateOfLaunch.toISOString());
    this.editMovieForm = new FormGroup({
      'name': new FormControl(this.movie.title,[Validators.required, Validators.maxLength(100)]),
      'boxOffice': new FormControl(this.movie.boxOffice,[Validators.required, Validators.pattern('^[0-9]+$')]),
      'category': new FormControl(this.movie.genre,[Validators.required]),
      'dateOfLaunch': new FormControl(new Date(this.movie.dateOfLaunch+'EDT').toISOString().substring(0,10),[Validators.required]),
      //'dateOfLaunch': new FormControl(this.movie.dateOfLaunch.toLocaleDateString(),[Validators.required]),
      'active': new FormControl(this.movie.isActive,[Validators.required]),
      'hasTrailer': new FormControl(this.movie.hasTeaser)
    });
  }

  updateMovieItem()
  {
    //console.log(this.editmovieForm);
    this.movie.title=this.editMovieForm.value.name;
    this.movie.boxOffice =this.editMovieForm.value.price;
    this.movie.genre = this.editMovieForm.value.category;
    this.movie.dateOfLaunch =this.editMovieForm.value.dateOfLaunch;
    this.movie.isActive =this.editMovieForm.value.active;
    this.movie.hasTeaser =this.editMovieForm.value.freeDelivery;

    //this.bo.updateBookItem(this.book);
    this.movieService.updateMovieItem(this.movie);
    this.movieEdited = true;
  }

}
