import { PlayerModel } from '../../utils/models/PlayerModel';
import { TimerProps } from '../../utils/types/TimerProps';
import { S } from './style';
import { useTimerActions } from './hooks';

export function Timer({currentPlayer, restartGame}: TimerProps){
    const {whiteTime, blackTime, restartHandler} = useTimerActions({currentPlayer, restartGame});

    return (
        <S.TimerWrapper>
            <div>
                <button onClick={restartHandler}>Restart game</button>
            </div>
            <h2>
                White - {blackTime}
            </h2>
            <h2>
                Black - {whiteTime}
            </h2>
        </S.TimerWrapper>
    )
}
