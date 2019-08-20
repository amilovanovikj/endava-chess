import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGame } from '../models/IGame';

@Component({
  selector: 'app-my-games',
  templateUrl: './my-games.component.html',
  styleUrls: ['./my-games.component.css']
})
export class MyGamesComponent implements OnInit {

  gamesList: IGame[]

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<IGame[]>('../assets/mygames_mock.json').subscribe(
      response => {
        this.gamesList = response;
        console.log(this.gamesList)        
      }
    );
  }

}
