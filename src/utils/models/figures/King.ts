import { CellModel } from "../CellModel";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../../assets/black-king.png";
import whiteLogo from "../../../assets/white-king.png";

export class King extends Figure {
  constructor(color: Colors, cell: CellModel) {
    super(color, cell);

    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }

  canMove(target: CellModel): boolean {
    if (!super.canMove(target)) return false;
    const dx = Math.abs(this.cell.x - target.x);
    const dy = Math.abs(this.cell.y - target.y);

    let min = this.cell.x - 1;
    let max = this.cell.x + 1;
    if (
      (target.y === this.cell.y &&
        (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)) ||
      (target.x === this.cell.x &&
        (target.y === this.cell.y + 1 || target.y === this.cell.y - 1))
    )
      return true;
    // target.y === this.cell.y
    //target.x === this.cell.x
    if (dx === 1 && dy === 1) return true;
    return false;
  }
}
