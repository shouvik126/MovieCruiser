import { Component, OnInit } from '@angular/core';
import { List } from '../list';
import { ListService } from '../list.service';

@Component({
  selector: 'app-favourites-list',
  templateUrl: './favourites-list.component.html',
  styleUrls: ['./favourites-list.component.css']
})
export class FavouritesListComponent implements OnInit {

  list: List[]=[];
  total: number;
  status: number = 0;
  error: String;
  constructor(private listService: ListService) {}
 
  ngOnInit() {
    this.total = 0;
    this.error = '';
    this.listService.getAllFvoriteItems().subscribe((response)=>{
      this.list = response['movieDetailsList'];
      console.log(this.list);
      this.total = response['total'];
    });
    

  }
  
  deleteFavoriteItem(movieId){
    this.total = 0;
    this.listService.deleteFavoriteItems(movieId).subscribe((response)=>{
      this.status = 0;
      this.status++;
      this.listService.getAllFvoriteItems().subscribe(
        (response)=>{
          this.list = response['movieDetailsList'];
          this.total = response['total'];
          
        },(error)=>{
          this.error = error.error.errorDescription;
        }
      )
    });
  }
  // logOut(){
  //   this.login.logOut();
  //   this.router.navigate(['book-menu']);
  // }

  // listItemRemoved:boolean=false;
  // list:List;
  // constructor(
  //   private listService:ListService,
  // ) { }

  // ngOnInit(): void {
  //   this.list = this.listService.getList();
  // }

  // removeListItem(id: number)
  // {
  //   this.listService.removeListItem(id);
  //   this.listItemRemoved = true;
  // }
  // calculateTotalCount(): number
  // {
  //   //if(this.cartService.calculateTotalCartPrice)
  //   return this.listService.calculateTotalListCount();
  // }

}
