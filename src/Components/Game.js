import React from "react";
import Board from "./Board";
import "../App.css";
import { useState } from "react";
const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameOver, setGameOver] = useState(false);

  const getWinner = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combo of winningCombinations) {
      const [a, b, c] = combo;

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  function handleClick(selectedIndex) {
    if (squares[selectedIndex] !== null) return;

    let squareCopy = squares;
    squareCopy[selectedIndex] = currentPlayer;
    setSquares(squareCopy);

    const gameWinner = getWinner();
    if (gameWinner) {
      setGameOver(true);
    } else {
      if (currentPlayer === "X") {
        setCurrentPlayer("O");
      } else {
        setCurrentPlayer("X");
      }
    }
  }

  function startNewGame() {
    setGameOver(false);
    setSquares(Array(9).fill(null));
  }

  return (
    <div>
      {!gameOver && <h3>Current Player : {currentPlayer}</h3>}
      {gameOver && (
        <div>
          <h3 className="winnerDisplay">The winner is : {currentPlayer}</h3>
          <button className="button" onClick={startNewGame}>
            New Game
          </button>
        </div>
      )}

      <Board squares={squares} onclick={handleClick} />
    </div>
  );
};

export default Game;
