import { Component, OnInit } from '@angular/core';
import {PgnMoves} from '../models/pgnMoves';
import {HttpClient} from '@angular/common/http';
import {IGame} from '../models/IGame';

@Component({
  selector: 'app-moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.css']
})
export class MovesListComponent implements OnInit {

  gameMoves: IGame[];

  constructor(private http: HttpClient) {
     this.connect();
  }


  connect(): void {
    const source = new EventSource('http://localhost:8080/game/emitter/2');
    source.addEventListener('message', message => {
// There is no data property available on 'message' here
      // this.gameMoves = JSON.parse(message.data);
      console.log(this.gameMoves);
    });
  }

  ngOnInit() {
    /*this.http.get<PgnMoves[]>('../assets/pgn_mock.json').subscribe(
      response => {
        this.gameMoves = response;
        console.log(this.gameMoves);
      }
    );*/

    this.http.get<IGame[]>('http://localhost:8080/game/user-games/2').subscribe(
      response => {
        this.gameMoves = response;
        console.log(response); }
    );

  }

}
