import React, { Component } from "react";
import Board from "../board/Board";
import { connect } from "react-redux";

class Game extends Component {
  startNewGame = () => {
    this.props.ToggleClicked(this.props.index, this.props.dice);
  };
  componentDidMount() {
    this.startNewGame();
  }
  render() {
    return (
      <div>
        <h1>Game {this.props.index}</h1>
        <Board index={this.props.index} />
        <button onClick={this.startNewGame}>New Game</button>
      </div>
    );
  }
}

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
