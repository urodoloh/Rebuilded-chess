import { CellModel } from "../CellModel";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../../assets/black-queen.png";
import whiteLogo from "../../../assets/white-queen.png";

export class Queen extends Figure {
  constructor(color: Colors, cell: CellModel) {
    super(color, cell);

    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.QUEEN;
  }

  canMove(target: CellModel): boolean {
    if (!super.canMove(target)) return false;
    if (this.cell.isEmptyVertical(target)) return true;
    if (this.cell.isEmptyHorizontal(target)) return true;
    if (this.cell.isEmptyDiagonal(target)) return true;
    return false;
  }
}
