import { useState } from "react";
import RegisterPlayers from "../register-players/register-players";
import ScoreBoard from "../score-board/score-board";
import styles from "./counter.module.scss";

export default function Counter() {
  const [players, setPlayers] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div>
      {!gameStarted && (
        <div className={styles.counter}>
          <RegisterPlayers players={players} setPlayers={setPlayers} />
          <div className={styles.players}>
            {players.map((player, index) => (
              <div key={index} className={styles.player}>
                Player {index + 1}: {player.name}
              </div>
            ))}
          </div>
          {players && players.length > 1 && (
            <button
              className={styles.startBtn}
              onClick={() => {
                setGameStarted(true);
              }}
            >
              START
            </button>
          )}
        </div>
      )}
      {gameStarted && (
        <div>
          <ScoreBoard players={players} setPlayers={setPlayers} />
        </div>
      )}
    </div>
  );
}
