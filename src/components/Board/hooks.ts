import React, { useEffect, useState, FC, ReactElement } from "react";

import { BoardModel } from "../../utils/models/BoardModel";
import { BoardProps } from "../../utils/types/BoardProps";
import { CellModel } from "../../utils/models/CellModel";

export function useBoardBuild({
  board,
  setBoard,
  currentPlayer,
  swapPlayer,
}: BoardProps) {
  const [selectedCell, setSelectedCell] = useState<CellModel | null>(null);

  useEffect(() => {
    highlightCells();
  }, [selectedCell]);

  function click(cell: CellModel) {
    if (
      selectedCell &&
      selectedCell !== cell &&
      selectedCell.figure?.canMove(cell)
    ) {
      selectedCell.moveFigure(cell);
      swapPlayer();
      setSelectedCell(null);
    } else {
      if (cell.figure?.color === currentPlayer?.color) {
        setSelectedCell(cell);
      }
    }
  }

  function isSelected(cell: CellModel) {
    return cell.x === selectedCell?.x && cell.y === selectedCell?.y;
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  function highlightCells() {
    board.highlightCells(selectedCell);
    updateBoard();
  }

  return {
    click,
    isSelected,
    updateBoard,
    highlightCells,
  };
}
