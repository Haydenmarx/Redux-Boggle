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
        {/* {this.props.currentWord.length > 0 && ( */}
        <h3>
          {console.log(this.props)}
          <span>Current Word:</span>
          {this.props.currentWord.map(index => (
            <span>{this.props.board[index]}</span>
          ))}
        </h3>
        {/* })} */}
        <Board index={this.props.index} />
        <button onClick={this.startNewGame}>New Game</button>
      </div>
    );
  }
}

const mapStateToProps = function(state, ownProps) {
  return {
    dice: state.games[ownProps.index].dice,
    currentWord: state.games[ownProps.index].currentWord,
    board: state.games[ownProps.index].board
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
