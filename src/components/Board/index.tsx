import React, { useState, useEffect, FC } from "react";
import { BoardProps } from "../../utils/types/BoardProps";
import { S } from "./styles"
import { Cell } from '../Cell/index';
import { useBoardBuild } from "./hooks";

export function Board ({board, setBoard, currentPlayer, swapPlayer}: BoardProps){
    const {click, isSelected} = useBoardBuild({board, setBoard, currentPlayer, swapPlayer});

   return (
    <>
    <h3>Current Player {currentPlayer?.color}</h3>
     <S.BoardWrapper>
        {board.cells.map((row, index)=> 
            <React.Fragment key={index}>
                {row.map(cell =>
                    <Cell click={click} cell={cell} key={cell.id} selected={isSelected(cell)} />
                )}
            </React.Fragment>
        )}
     </S.BoardWrapper>
     </>
    
   )

}