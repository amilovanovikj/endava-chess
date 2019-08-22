import { IPiece, Color } from '../IPiece';

export class Pawn implements IPiece {
    color: Color;
    imageUri: string;

    draw(): string {
       this.imageUri = '../../assets/pawn.png';
       return this.imageUri;
    }

}
