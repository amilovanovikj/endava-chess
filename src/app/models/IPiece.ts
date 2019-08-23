export enum Color {
    White = 'white',
    Black = 'black',
}

export interface IPiece {
    color: Color;
    imageUri: string;

    draw(): string;
}
