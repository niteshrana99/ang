import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {
public apps : Promise<any>;
sta = [];
  constructor(private ServerService:ServerService) {
    this.apps=this.ServerService.getBookDetails()
   }

  
  ngOnInit() {
    
      // .then((data)=>{
      //   this.apps = data;
      // })
  }
  searchBooksByName='';
  // putData() {
  //   this.ServerService.storeBookdetails(this.apps)
  //     .subscribe(response => console.log(response),
  //     (err) => console.log(err))
  // }
}