import { Injectable } from '@angular/core';
import { List } from './list';
import { MovieService } from '../movies/movie.service';
import { Movie } from '../movies/movie';
import { AuthService } from '../site/auth.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  list: List[];
  user: any;
  movie: any;
  movieItemId: number;
  total: number = 0;
  baseUrl=environment.baseUrl+'/movie-service/'+'/movie-items/favorite-items/';
  constructor(private authenticationService: AuthService, private httpService: HttpClient) {
    
  }

  getAllFvoriteItems()
  {
    return this.httpService.get(this.baseUrl+this.authenticationService.getAuthenticatedUser());
  }
  
  // getAllCartItems() {
  //   let token = 'Bearer '+ this.authenticationService.getToken();
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': "application/json",
  //       "Authorization": token
  //     })  
  //   };
  //   this.user = this.login.getName();
  //   return this.httpService.get(this.baseUrl+"cart-items/"+this.user,httpOptions);
  // }

  deleteFavoriteItems(movieDetailsId:number) 
  {
    return this.httpService.delete(this.baseUrl+this.authenticationService.getAuthenticatedUser()+'/'+movieDetailsId)
  }
  
  // removeFromCart(id) {
  //   let token = 'Bearer '+ this.authenticationService.getToken();
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': "application/json",
  //       "Authorization": token
  //     })  
  //   };
  //   this.user = this.login.getName();
  //   return this.httpService.delete(this.baseUrl+"cart-items/"+this.user+"/"+id,httpOptions);
  // }

  addFavoriteItem(movieId:number)
  {
    return this.httpService.post(this.baseUrl+this.authenticationService.getAuthenticatedUser()+'/'+movieId,{});
  }
  
  // addCartItem(cartId) {
  //   let token = 'Bearer '+ this.authenticationService.getToken();
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': "application/json",
  //       "Authorization": token
  //     })
  //   };
  //   this.menuItemId = cartId;
  //   this.user = this.loginService.getName();
  //   return this.httpService.post(this.baseUrl+"cart-items/"+this.user+"/"+this.menuItemId,{},httpOptions);

  // }


  // movieList: Movie;
  // totalListCount:number;
  // list: List;
  // static listCount:number=0;
  // constructor(
  //   private movieService:MovieService,
  //   private authService:AuthService
  // ) { }

  // getList(): List
  // {
  //   // this.movieService.getAllFvoriteItems(this.authService.getAuthenticatedUser()).subscribe(
  //   //   res
  //   // );
  //   if(this.list==null)
  //     return null;
  //   else
  //   {
  //     this.list.listTotal = this.calculateTotalListCount();
  //     return this.list;
  //   }
  // }
  // calculateTotalListCount()
  // {
  //   this.totalListCount = 0;
  //   if(this.list)
  //   for(let item of this.list.listItems)
  //   {
  //     this.totalListCount += 1;
  //   }
  //   return this.totalListCount;
  // }

  // removeListItem(id:number)
  // {
  //   const item_index = this.list.listItems.findIndex(listItem=>listItem.id==id);
  //   this.list.listItems.splice(item_index,1); 
  // }
  // addToList(id:number): string
  // {
  //   //this.movieList = this.movieService.getMovieItemById(id);
  //   this.movieService.getMovieItemById(id).subscribe(
  //     response=>{
  //       this.movieList = response;
  //     }
  //   );
  //   this.movieService.addFavoriteItem(this.authService.getAuthenticatedUser(),this.movieList.id).subscribe(

  //   );
  //   // if(ListService.listCount == 0)
  //   // {
  //   //   this.list={
  //   //     listItems:[
  //   //       this.movieList
  //   //     ],
  //   //     listTotal:0
  //   //   };
  //   //   ListService.listCount++;
  //   // }
  //   // else
  //   // {
  //   //   this.list.listItems.push(this.movieList);
  //   //   this.list.listTotal = 0;
  //   //   ListService.listCount++;
  //   // }
  //   //console.log(CartserviceService.cartCount);
  //   return this.movieList.title;
  // }
}
