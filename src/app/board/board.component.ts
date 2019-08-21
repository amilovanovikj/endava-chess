import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IGame } from '../models/IGame';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  game: IGame;
  id: number;

  constructor(private http: HttpClient,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.id = +params.get('id');
      }
    );
    /* this.id = +this.route.snapshot.paramMap.get('id'); */
    /* this.http.get<IGame[]>('../assets/mygames_mock.json').subscribe(
      response => {
        this.game = response[+this.route.snapshot.paramMap.get('id') - 1];
      }
    ); */
  }

}
