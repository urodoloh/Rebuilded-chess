import React, { useEffect, useState } from 'react'
import { S } from './styles'
import { Board } from '../Board'
import { BoardModel } from '../../utils/models/BoardModel';
import { useGameActions } from './hooks';
import { LostFigures } from '../LostFigures';
import { Timer } from '../Timer';

export function Game(){
    const {restartBoard, board, setBoard, currentPlayer, setCurrentPlayer, whitePlayer, blackPlayer, swapPlayer} = useGameActions();
    
    useEffect(()=>{
        restartBoard();
        setCurrentPlayer(whitePlayer)
        
    },[])

    
    return (
        <S.GameWrapper>
            <Timer currentPlayer={currentPlayer} restartGame={restartBoard}/>
            <Board
             board={board}
             setBoard={setBoard}
             currentPlayer={currentPlayer} 
             swapPlayer={swapPlayer}/>

        <div>
            <LostFigures
                title='Black side losses' figures={board.lostBlackFigures}
            />
            <LostFigures 
                title='White side losses' figures={board.lostWhiteFigures}
                />
        </div>
        
        </S.GameWrapper>
    )
}