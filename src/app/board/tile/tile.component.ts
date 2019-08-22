import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPiece, Color } from 'src/app/models/IPiece';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  @Input() row: any;
  @Input() column: string;
  @Output() clicked = new EventEmitter();

  color: Color;
  piece: IPiece = null;

  onClick(): void {
    console.log(`${this.column}${this.row}`);
    this.clicked.emit(this);
  }

  getPieceImage(): string {
    if (this.piece) {
      return this.piece.imageUri;
    }
  }

  getColor(): string {
    if (this.column.charCodeAt(0) % 2 === 0) {
      return this.row % 2 ? 'white' : 'black';
    } else {
      return this.row % 2 ? 'black' : 'white';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
