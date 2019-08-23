import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPiece, Color } from 'src/app/models/IPiece';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  @Input() coordinates: string;
  @Input() row: any;
  @Input() column: string;
  @Output() clicked = new EventEmitter();
  // debug text
  @Input() text: string;

  color: Color;
  piece: IPiece = null;

  onClick(): void {
    /* console.log(`${this.column}${this.row}`); */
    console.log(this.coordinates);
    this.clicked.emit(this);
  }

  getPieceImage(): string | null {
    if (this.piece) {
      return this.piece.imageUri;
    }
  }

  getColor(): string {
    if (this.column.charCodeAt(0) % 2 === 0) {
      return this.row % 2 ? Color.White : Color.Black;
    } else {
      return this.row % 2 ? Color.Black : Color.White;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
