import { useState, useEffect } from "react";
import Counter from "./Counter";
import RegisterPlayers from "./RegisterPlayers";
import ScoreBoard from "./ScoreBoard";

export default function App() {
  const [players, setPlayers] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div>
      <h2>App</h2>
      <RegisterPlayers players={players} setPlayers={setPlayers} />
      {/* <Counter /> */}
      <div>
        {players.map((player, index) => (
          <div key={index}>Name: {player.name}</div>
        ))}
      </div>
      {players && players.length > 1 && (
        <button
          onClick={() => {
            setGameStarted(true);
          }}
        >
          Start
        </button>
      )}

      {gameStarted && (
        <div>
          <h2>Game Started</h2>
          <ScoreBoard players={players} setPlayers={setPlayers} />
        </div>
      )}
    </div>
  );
}
