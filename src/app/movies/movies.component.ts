import { MovieServviceService } from './../movie-servvice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
   movieData:any;
  constructor(private service:MovieServviceService) {  }

  ngOnInit() {
    this.service.getData().subscribe((data)=>
  { 
    this.movieData = data["results"];
     console.log(this.movieData)
  })
  }

}
