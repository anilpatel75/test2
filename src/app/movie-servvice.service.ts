import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieServviceService {

  constructor( private http:Http) { }


  getData()
  {
    return this.http.get("https://swapi.co/api/films")
    .map((response:Response) =>response.json());
  }

  }




