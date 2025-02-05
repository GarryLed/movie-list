import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movie-list';

  moviesList = [
    {id: 1, title: "Back to the future", year: '1984', director: 'Robert Zemeckis' },
    {id:2, title: "Requiem for a Dream", year: '2000', director: 'Darren Aronofsky'},
    {id:3, title: "The Social Network", year: '2010', director: 'Darren Aronofsky'},
    {id:4, title: "Fight Club", year: '1999', director: 'David Findher'}
  
  ]
  
}
