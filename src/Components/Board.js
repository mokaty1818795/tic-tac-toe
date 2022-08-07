import React from "react";
import Square from "./Square";
const Board = ({ squares, onclick }) => {
  return (
    <>
      <div className="board">
        <div className="container">
          <p>ACA TIC TAC TOE</p>
        </div>
        <div className="board-square">
          {squares.map((square, index) => {
            return <Square onclick={onclick} value={square} index={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Board;
