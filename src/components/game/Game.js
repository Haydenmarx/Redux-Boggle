import React, { Component } from "react";
import Board from "../board/Board";
import { connect } from "react-redux";

class Game extends Component {
  componentDidMount() {
    this.startNewGame();
  }
  startNewGame = () => {
    this.props.ToggleClicked(this.props.index, this.props.dice);
  };
  submitWord = () => {
    this.props.submitWord(this.props.index, this.props.currentWord.join("-"));
  };
  render() {
    return (
      <div>
        <h1>Game {this.props.index}</h1>
        {/* {this.props.currentWord.length > 0 && ( */}
        <h3>
          <span>Current Word:</span>
          {this.props.currentWord.map(index => (
            <span key={index}>{this.props.board[index]}</span>
          ))}
        </h3>
        {/* })} */}
        <Board index={this.props.index} />
        <button onClick={this.startNewGame}>New Game</button>
        <button onClick={this.submitWord}>Submit Word</button>
        <ul>
          {Object.keys(this.props.submittedWords).map(word => {
            return <li>{word}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = function(state, ownProps) {
  return {
    dice: state.games[ownProps.index].dice,
    currentWord: state.games[ownProps.index].currentWord,
    board: state.games[ownProps.index].board,
    submittedWords: state.games[ownProps.index].wordList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ToggleClicked: (boardIndex, dice) =>
      dispatch({
        type: "Randomize_Board",
        boardIndex,
        dice
      }),
    submitWord: (boardIndex, word) =>
      dispatch({
        type: "Submit_Word",
        boardIndex,
        word
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
