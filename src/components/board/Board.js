import React from "react";
import { connect } from "react-redux";
import Square from "../square/Square";

const Board = props => {
  return (
    <div>
      <h1>Game {props.game.id}</h1>
      {props.game.board.map((square, index) => (
        <Square
          key={`Game${props.index}Square${index}`}
          gameIndex={props.index}
          squareIndex={index}
        />
      ))}
    </div>
  );
};

const mapStateToProps = function(state, ownProps) {
  return {
    game: state.games[ownProps.index]
  };
};

export default connect(mapStateToProps)(Board);
