import React from 'react'
import { S} from './styles';
import { CellProps } from '../../utils/types/CellProps';
import { useCellParams } from './hooks';


export function Cell({cell, selected, click}: CellProps){
    const {isSelected, isAvailable, isFigureExists} = useCellParams();
    
    let cellColor = ['cell', cell.color, isSelected(selected)].join(' ');
    let figureLogo = cell.figure?.logo;
    

    return (
        <S.CellWrapper 
            className={cellColor} 
            onClick={()=> click(cell)}
            style = {{background: isAvailable(cell) && isFigureExists(cell) ? 'green' : ''}}
        >
            {isAvailable(cell) && !isFigureExists(cell) &&  <S.Available/>}
            {figureLogo && <img src={figureLogo} alt=''/>}
        </S.CellWrapper>
    )
}

// export function Cell(prop: {cell?:string}){
    
//     return (
//         <CellWrapper className={prop.color}>1</CellWrapper>
//     )
// }