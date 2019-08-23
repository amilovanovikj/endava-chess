import { IPiece, Color } from '../IPiece';

export class Pawn implements IPiece {
    color: Color;
    imageUri = '../../assets/pawn.png';

    draw(): string {
       return this.imageUri;
    }

}
