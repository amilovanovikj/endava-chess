export enum Color {
    White,
    Black
}

export interface IPiece {
    color: Color;
    imageUri: string;

    draw(): string;
}
