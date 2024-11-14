import { useState, useEffect } from "react";

export default function RegisterPlayers({ players, setPlayers }) {
  const [playerName, setPlayerName] = useState("");

  return (
    <div>
      <p>ユーザーを追加してください</p>
      <input type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)} />
      <button
        onClick={() => {
          setPlayers([...players, { name: playerName, score: [0] }]);

          // inputをクリアする
          setPlayerName("");
        }}
      >
        追加
      </button>
    </div>
  );
}
