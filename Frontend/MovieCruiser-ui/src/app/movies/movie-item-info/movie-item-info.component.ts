import { Component, OnInit, Input, Output, EventEmitter, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';
import { MovieService } from '../movie.service';
import { AuthService } from 'src/app/site/auth.service';
import { Router } from '@angular/router';
import { Movie } from '../movie';
import { ListService } from 'src/app/favourites/list.service';
@Component({
  selector: 'app-movie-item-info',
  templateUrl: './movie-item-info.component.html',
  styleUrls: ['./movie-item-info.component.css']
})
export class MovieItemInfoComponent implements OnInit, DoCheck {

  @Input() movieList: Movie[];
  @Output() addedToList = new EventEmitter();
  //isCustomer : boolean = this.authService.isCustomer;
  //isCustomer: boolean = this.authService.isUserLoggedIn();
  isCustomer: boolean = this.authService.isUserCustomer();
  itemName: string;
  itemAdded = false;
  constructor(
    private movieService: MovieService,
    private authService: AuthService,
    private router: Router,
    private listService: ListService
  ) {
    
  }
  ngDoCheck(): void {
    this.authService._subject.subscribe({
      next:(response)=>{
        this.isCustomer = this.authService.isUserCustomer();
        if (this.isEditAllowed()) {
          //this.movieList = this.movieService.getMovieItemAdmin();
          this.movieService.getMovieItemAdmin().subscribe(
            (response) => {
              this.movieList = response;
              console.log(this.movieList)
            }
          );
        }
        else {
          this.movieService.getMovieItems().subscribe(
            (response) => {
              this.movieList = response;
              console.log(this.movieList)
            }
          );
          //this.movieList = this.movieService.getMovieItems(true,new Date());
        }
      }
    });
    // if(!this.authService.isUserLoggedIn())
    // {
    //   this.movieService.getMovieItems().subscribe(
    //     (response) => {
    //       this.movieList = response;
    //       console.log(this.movieList)
    //     }
    //   );
      
    // }
  }


  ngOnInit(): void {
    if (this.isEditAllowed()) {
      //this.movieList = this.movieService.getMovieItemAdmin();
      this.movieService.getMovieItemAdmin().subscribe(
        (response) => {
          this.movieList = response;
          console.log(this.movieList)
        }
      );
    }
    else {
      this.movieService.getMovieItems().subscribe(
        (response) => {
          this.movieList = response;
          console.log(this.movieList)
        }
      );
      //this.movieList = this.movieService.getMovieItems(true,new Date());
    }
  }

  isEditAllowed(): boolean {
    return this.authService.isUserAdmin();
  }

  deleteMovie(movieId:number){
    this.movieService.deleteMovieItem(movieId).subscribe(
      response=>{
        this.authService.newEvent('delete');
        console.log(response);
      }
    );

  }

  addToList(itemId: number) {
    //console.log("crt item added");
    if (this.isCustomer) {
      this.itemAdded = true;
      for (var item of this.movieList) {
        if (item.id == itemId) {
          this.itemName = item.title;
        }
      }

      this.listService.addFavoriteItem(itemId).subscribe(
        response => {

        }
      );
      setTimeout(() => {
        this.itemAdded = false;
      }, 1000);
    }
    else {
      this.authService.authStatus = 'cart';
      this.router.navigate([this.authService.redirectUrlLogin]);
    }
  }

}
