import { Injectable } from '@angular/core';
import { List } from './list';
import { MovieService } from '../movies/movie.service';
import { Movie } from '../movies/movie';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  movieList: Movie;
  totalListCount:number;
  list: List;
  static listCount:number=0;
  constructor(
    private movieService:MovieService
  ) { }

  getList(): List
  {
    if(this.list==null)
      return null;
    else
    {
      this.list.listTotal = this.calculateTotalListCount();
      return this.list;
    }
  }
  calculateTotalListCount()
  {
    this.totalListCount = 0;
    if(this.list)
    for(let item of this.list.listItems)
    {
      this.totalListCount += 1;
    }
    return this.totalListCount;
  }

  removeListItem(id:number)
  {
    const item_index = this.list.listItems.findIndex(listItem=>listItem.id==id);
    this.list.listItems.splice(item_index,1); 
  }
  addToList(id:number): string
  {
    this.movieList = this.movieService.getMovieItemById(id);
    if(ListService.listCount == 0)
    {
      this.list={
        listItems:[
          this.movieList
        ],
        listTotal:0
      };
      ListService.listCount++;
    }
    else
    {
      this.list.listItems.push(this.movieList);
      this.list.listTotal = 0;
      ListService.listCount++;
    }
    //console.log(CartserviceService.cartCount);
    return this.movieList.title;
  }
}
