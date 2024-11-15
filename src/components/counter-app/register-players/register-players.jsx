import { useState } from "react";
import styles from "./register-players.module.scss";

export default function RegisterPlayers({ players, setPlayers }) {
  const [playerName, setPlayerName] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className={styles.register}>
      <p className={styles.title}>Add Players</p>
      <div className={styles.inputRow}>
        <input type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)} />
        <button
          className={styles.btn}
          onClick={() => {
            if (playerName === "") {
              setShowAlert(true);
            } else {
              setShowAlert(false);
              setPlayers([...players, { name: playerName, score: [] }]);

              // inputをクリアする
              setPlayerName("");
            }
          }}
        >
          ADD
        </button>
      </div>
      {showAlert && <p className={styles.error}>Please enter your name.</p>}
    </div>
  );
}
