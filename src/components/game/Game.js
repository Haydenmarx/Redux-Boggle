import React from "react";
import Board from "../board/Board";

const Game = props => {
  return (
    <div>
      <Board index={props.index} />
    </div>
  );
};

export default Game;
