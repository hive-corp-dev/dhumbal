import React from "react";
import { useState, useEffect, useRef } from "react";
import styles from "./score-board.module.scss";

export default function ScoreBoard({ players, setPlayers }) {
  const inputRefs = useRef(players.map(() => React.createRef()));

  const handleAddScores = () => {
    // 各inputの現在の値を取得して新しいscoreに追加
    setPlayers((prevPlayers) =>
      prevPlayers.map((player, index) => {
        const newScore = Number(inputRefs.current[index].current.value) || 0;
        return {
          ...player,
          score: [...player.score, newScore],
        };
      })
    );
  };

  useEffect(() => {
    // clear input value
    inputRefs.current.forEach((inputRef) => {
      inputRef.current.value = "";
    });

    return () => {};
  }, [players]);

  return (
    <div>
      <p className={styles.title}>ScoreBoard</p>

      <div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              {players.map((player, index) => (
                <th key={index}>{player.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {players[0].score.map((_, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                {players.map((player, playerIndex) => (
                  <td key={playerIndex}>{player.score[index]}</td>
                ))}
              </tr>
            ))}
            <tr>
              <td>Total</td>
              {players.map((player, index) => (
                <td key={index}>{player.score.reduce((a, b) => a + b, 0)}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.score}>
        {players.map((player, index) => (
          <div key={index} className={styles.scoreRow}>
            <div className={styles.scoreName}>{player.name}</div>
            <input type="number" placeholder="0" min={0} max={99} name={player} ref={inputRefs.current[index]} />
          </div>
        ))}

        <button
          className={styles.scoreBtn}
          onClick={() => {
            handleAddScores();
          }}
        >
          ADD SCORE
        </button>
      </div>
    </div>
  );
}
