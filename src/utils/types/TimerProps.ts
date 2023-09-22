import { PlayerModel } from "../models/PlayerModel";

export interface TimerProps {
  currentPlayer: PlayerModel | null;
  restartGame: () => void;
}
