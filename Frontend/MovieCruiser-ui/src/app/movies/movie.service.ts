import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from './movie';
import { AuthService } from '../site/auth.service';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movieFilter: Movie[] = [];
  movies:Movie[] = [];
  baseUrl=environment.baseUrl+'/movie-service/';
  // movies: Movie[] = [
  //   {id: 101,
  //     name: "Sandwich",
  //     boxOffice:99,
  //     active:true,
  //     dateOfLaunch:new Date('03/15/2017'),
  //     category:'MainCourse',
  //     hasTrailer:true,
  //     url: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80'
  //   },
  //   {id: 102,
  //     name: "Burger",
  //     boxOffice:129,
  //     active:true,
  //     dateOfLaunch:new Date('12/23/2017'),
  //     category:'MainCourse',
  //     hasTrailer:false,
  //     url: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  //   },
  //   {id: 103,
  //     name: "Pizza",
  //     boxOffice:149,
  //     active:true,
  //     dateOfLaunch:new Date('08/21/2017'),
  //     category:'MainCourse',
  //     hasTrailer:false,
  //     url: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80'
  //   },
  //   {id: 104,
  //     name: "French Fries",
  //     boxOffice:32,
  //     active:false,
  //     dateOfLaunch:new Date('07/02/2017'),
  //     category:'Starter',
  //     hasTrailer:true,
  //     url: 'https://images.unsplash.com/photo-1526230427044-d092040d48dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  //   },
  //   {id: 105,
  //     name: "Chocolate Brownie",
  //     boxOffice:57,
  //     active:true,
  //     dateOfLaunch:new Date('11/02/2017'),
  //     category:'Dessert',
  //     hasTrailer:true,
  //     url: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1330&q=80'
  //   },

  // ];

  constructor(
    private authService: AuthService,
    private httpService: HttpClient) { }

  getMovieItemAdmin()
  {
    return this.httpService.get<any>(this.baseUrl+'movie-items')
    .pipe(
      map(
        data=>{
          this.movies = data;
          return data;
        } 
      )
    );
  }

  getMovieItems(){
    //this.movieFilter= this.movies.filter(x=>x.isActive == active && x.dateOfLaunch < dateOfLaunch); 
    //return this.movieFilter;
    return this.httpService.get<any>(this.baseUrl+'movie-items')
    .pipe(
      map(
        data=>{
          this.movies = data;
          return data;
        }

      )
    );
  }

  search(searchKey: String):Movie[]
  {
    
    //if (this.authService.isAdmin) {
      this.movieFilter = this.movies.filter(x => x.title.toLowerCase().indexOf(searchKey.toLowerCase()) !== -1)
    //}
    //else
        //this.movieFilter= this.movies.filter(x=>x.title.toLowerCase().indexOf(searchKey.toLowerCase())!==-1 && x.isActive == true && x.dateOfLaunch < new Date()) ;
      return this.movieFilter;
  }

  getMovieItemById(movieId:number)
  {
    // for(let movie of this.movies )
    // {
    //   if(movie.id == movieId)
    //   {
    //     console.log(movie);
    //     return movie;
    //   }
    // }
    // return null;
    return this.httpService.get<any>(this.baseUrl+'movie-items/'+movieId);
  }

  updateMovieItem(movie:Movie)
  {
    //const movieId = this.movies.findIndex(fid=>fid.id==movie.id);
    //this.movies[movieId] = movie;
    return this.httpService.put(this.baseUrl+'movie-items', movie);
  }

  // addFavoriteItem(user:string, movieId:number)
  // {
  //   return this.httpService.post(this.baseUrl+'favorite-items/'+user+'/'+movieId,{});
  // }

  // getAllFvoriteItems(user:string)
  // {
  //   return this.httpService.get(this.baseUrl+'favorite-items/'+user);
  // }

  // deleteFavoriteItems(user:String, movieDetailsId:number) {
  //   return this.httpService.delete(this.baseUrl+'favorite-items/'+user+'/'+movieDetailsId)
  // }
}
