import { Component, OnInit } from '@angular/core';
import { List } from '../list';
import { ListService } from '../list.service';

@Component({
  selector: 'app-favourites-list',
  templateUrl: './favourites-list.component.html',
  styleUrls: ['./favourites-list.component.css']
})
export class FavouritesListComponent implements OnInit {

  listItemRemoved:boolean=false;
  list:List;
  constructor(
    private listService:ListService,
  ) { }

  ngOnInit(): void {
    this.list = this.listService.getList();
  }

  removeListItem(id: number)
  {
    this.listService.removeListItem(id);
    this.listItemRemoved = true;
  }
  calculateTotalCount(): number
  {
    //if(this.cartService.calculateTotalCartPrice)
    return this.listService.calculateTotalListCount();
  }

}
