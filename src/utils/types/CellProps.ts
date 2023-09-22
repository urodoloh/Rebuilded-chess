import { CellModel } from "../models/CellModel";

export interface CellProps {
  click: (cell: CellModel) => void;
  selected: Boolean;
  cell: CellModel;
}
