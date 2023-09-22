import { time } from "console";
import { useEffect, useRef, useState } from "react";
import { TimerProps } from "../../utils/types/TimerProps";
import { Colors } from "../../utils/models/Colors";

export function useTimerActions({ currentPlayer, restartGame }: TimerProps) {
  const [time, setTime] = useState(300);

  const [blackTime, setBlackTime] = useState(time);
  const [whiteTime, setWhiteTime] = useState(time);

  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    startTimer();
  }, [currentPlayer]);

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current);
    }
    const callback =
      currentPlayer?.color === Colors.WHITE
        ? decrementWhitePlayer
        : decrementBlackPlayer;
    timer.current = setInterval(callback, 1000);
  }

  function decrementWhitePlayer() {
    setWhiteTime((prev) => prev - 1);
  }

  function decrementBlackPlayer() {
    setBlackTime((prev) => prev - 1);
  }

  function restartHandler() {
    setWhiteTime(time);
    setBlackTime(time);
    restartGame();
  }
  return { blackTime, whiteTime, restartHandler };
}
