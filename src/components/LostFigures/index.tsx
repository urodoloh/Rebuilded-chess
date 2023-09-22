import React, { FC } from 'react'
import { S } from './style'
import { LostFiguresProps } from '../../utils/types/LostFiguresProps'

export function LostFigures ({title, figures}: LostFiguresProps) {

  return (
    <S.main>
        <h3>{title}</h3>
        {figures.map(figure => 
            <S.element key={figure.id}>
                {figure.name} {figure.logo && <img width={20} height={20} src={figure.logo}/>}
            </S.element>
            )}
    </S.main>
  )
}
