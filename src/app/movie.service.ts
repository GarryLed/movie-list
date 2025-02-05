import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  moviesList = [
    {id: 1, title: "Back to the future", year: '1984', director: 'Robert Zemeckis' },
    {id:2, title: "Requiem for a Dream", year: '2000', director: 'Darren Aronofsky'},
    {id:3, title: "The Social Network", year: '2010', director: 'Darren Aronofsky'},
    {id:4, title: "Fight Club", year: '1999', director: 'David Findher'}
  
  ]

  // method 
  getMovies() {
    return this.moviesList;
  }
}
