import {AfterContentInit, Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IGame} from '../models/IGame';

@Component({
  selector: 'app-my-games',
  templateUrl: './my-games.component.html',
  styleUrls: ['./my-games.component.css']
})
export class MyGamesComponent implements OnInit {

  gamesList: IGame[];
  game: IGame;

  constructor(private http: HttpClient) {
    this.connect();
  }

  connect(): void {
    const source = new EventSource('http://localhost:8080/game/emitter/1');
    source.addEventListener('message', message => {
// There is no data property available on 'message' here
      this.game = JSON.parse(message.data);
      console.log(this.game);
    });
  }


  ngOnInit() {
    /*this.http.get<IGame[]>('../assets/mygames_mock.json').subscribe(
      response => {
        this.gamesList = response;
        console.log(this.gamesList);
      }
    );*/

     this.http.get<IGame[]>('http://localhost:8080/game/user-games/1').subscribe(
      response => {
        this.gamesList = response;
        console.log(response); }
    );
  }


}
