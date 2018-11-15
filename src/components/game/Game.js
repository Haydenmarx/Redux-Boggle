import React from "react";
import Board from "../board/Board";

const Game = props => {
  return (
    <div>
      <h1>Game {props.index}</h1>
      <Board index={props.index} />
    </div>
  );
};

export default Game;
