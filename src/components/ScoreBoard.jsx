import React from "react";
import { useState, useEffect, useRef } from "react";
import styles from "../styles/ScoreBoard.module.scss";

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

  return (
    <div>
      <p>ScoreBoard</p>

      <div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th></th>
              {players.map((player, index) => (
                <th key={index}>{player.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {players[0].score.map((_, index) => (
              <tr key={index}>
                <td>Round {index + 1}</td>
                {players.map((player, playerIndex) => (
                  <td key={playerIndex}>{player.score[index]}</td>
                ))}
              </tr>
            ))}
            <tr>
              <td>Score</td>
              {players.map((player, index) => (
                <td key={index}>{player.score.reduce((a, b) => a + b, 0)}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        {players.map((player, index) => (
          <div key={index}>
            <input type="number" min={0} name={player} defaultValue={0} ref={inputRefs.current[index]} />
          </div>
        ))}

        <button
          onClick={() => {
            // setPlayers(
            //   players.map((player) => {
            //     return {
            //       ...player,
            //       score: [...player.score, score],
            //     };
            //   })
            // );
            handleAddScores();
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
