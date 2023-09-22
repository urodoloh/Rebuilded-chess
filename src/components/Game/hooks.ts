import React, { useState } from "react";
import { BoardModel } from "../../utils/models/BoardModel";
import { PlayerModel } from "../../utils/models/PlayerModel";
import { Colors } from "../../utils/models/Colors";

export function useGameActions() {
  const [board, setBoard] = useState(new BoardModel());
  const [whitePlayer, setWhitePlayer] = useState(new PlayerModel(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new PlayerModel(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<PlayerModel | null>(null);

  function restartBoard() {
    const newBoard = new BoardModel();

    newBoard.initCells();
    newBoard.addFigures();

    setBoard(newBoard);
  }

  function swapPlayer() {
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
    );
  }

  return {
    restartBoard,
    board,
    setBoard,
    currentPlayer,
    setCurrentPlayer,
    whitePlayer,
    blackPlayer,

    swapPlayer,
  };
}
