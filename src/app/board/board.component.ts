import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IGame } from '../models/IGame';
import { TileComponent } from './tile/tile.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  game: IGame;
  id: number;

  fetchGame(id: number): void {
    this.http.get<IGame[]>('../assets/mygames_mock.json').subscribe(
      response => {
        this.game = response.find((game) => +game.id === id);
      },
      () => {},
      () => {
        if (!this.game) {this.router.navigate(['/dashboard/game/0']); }
      }
    );
  }

  onTileClick(tile: TileComponent): void {}

  constructor(private http: HttpClient,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.id = +params.get('id');
        this.fetchGame(this.id);
      }
    );
  }

}
