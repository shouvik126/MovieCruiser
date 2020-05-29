import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
export class MovieItemInfoComponent implements OnInit {

  @Input() movieList : Movie[];
  @Output() addedToList = new EventEmitter();
  isCustomer : boolean = this.authService.isCustomer;
  itemName : string;
  itemAdded = false;
  constructor(
    private movieService:MovieService,
    private authService:AuthService,
    private router:Router,
    private listService: ListService
  ) { }

  ngOnInit(): void {
    if(this.isEditAllowed())
    {
      //this.movieList = this.movieService.getMovieItemAdmin();
      this.movieService.getMovieItemAdmin().subscribe(
        (response)=>{
          this.movieList = response;
          console.log(this.movieList)
        }
      );
    }
    else
    {
      this.movieService.getMovieItems().subscribe(
        (response)=>{
          this.movieList = response;
          console.log(this.movieList)
        }
      );
      //this.movieList = this.movieService.getMovieItems(true,new Date());
    }
  }

  isEditAllowed():boolean{
    return this.authService.isUserAdmin();
  }

  addToList(itemId: number)
  {
    //console.log("crt item added");
    if(this.isCustomer)
    {
        this.itemAdded = true;
        this.itemName = this.listService.addToList(itemId);
        setTimeout(()=>{
          this.itemAdded = false;
        },1000);
    }
    else
    {
      this.authService.authStatus = 'cart';
      this.router.navigate([this.authService.redirectUrlLogin]);
    }
  }

}
