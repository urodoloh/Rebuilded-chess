import React from "react";
import { CellModel } from "../../utils/models/CellModel";

export function useCellParams() {
  function isAvailable(cell: CellModel) {
    if (cell.available) return true;
    return false;
  }

  function isSelected(selected: Boolean) {
    if (selected) return "selected";
    return "";
  }

  function isFigureExists(cell: CellModel) {
    if (cell.figure) return true;
    return false;
  }

  return {
    isAvailable,
    isSelected,
    isFigureExists,
  };
}
