import { Colors } from "../Colors";
import logo from "../../../assets/black-king.png";
import { CellModel } from "../CellModel";

export enum FigureNames {
  FIGURE = "Figure",
  BISHOP = "Bishop",
  KING = "King",
  KNIGHT = "Knight",
  PAWN = "Pawn",
  QUEEN = "Queen",
  ROOK = "Rook",
}

export class Figure {
  color: Colors;
  logo: typeof logo | null;
  cell: CellModel;
  name: FigureNames;
  id: number;

  constructor(color: Colors, cell: CellModel) {
    this.color = color;
    this.logo = null;
    this.cell = cell;
    this.cell.figure = this;
    this.name = FigureNames.FIGURE;
    this.id = Math.random();
  }

  canMove(target: CellModel): boolean {
    if (target.figure?.color === this.color) return false;
    if (target.figure?.name === FigureNames.KING) return false;
    return true;
  }

  moveFigure(target: CellModel) {}
}
