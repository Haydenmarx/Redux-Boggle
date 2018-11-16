import React from "react";
import Board from "../board/Board";
import { connect } from "react-redux";

const Game = props => {
  const startNewGame = () => {
    props.ToggleClicked(props.index, props.dice);
  };
  return (
    <div>
      <h1>Game {props.index}</h1>
      <Board index={props.index} />
      <button onClick={startNewGame}>New Game</button>
    </div>
  );
};

const mapStateToProps = function(state, ownProps) {
  return {
    dice: state.games[ownProps.index].dice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ToggleClicked: (boardIndex, dice) =>
      dispatch({
        type: "Randomize_Board",
        boardIndex,
        dice
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
