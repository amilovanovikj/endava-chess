import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { IGame } from '../models/IGame';
import { TileComponent } from './tile/tile.component';
import { Pawn } from '../models/pieces/Pawn';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, AfterViewInit {
  @ViewChildren(TileComponent) tiles: QueryList<TileComponent>;
  tileMap = new Map<string, TileComponent>();
  game: IGame;

  onTileClick(tile: TileComponent): void { }

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    console.log(this.tiles.toArray());
    /* this.tiles.toArray()[0].piece = new Pawn(); */
    for (const tile of this.tiles.toArray()) {
      this.tileMap.set(tile.coordinates, tile);
    }
    console.log(this.tileMap);
  }

}
