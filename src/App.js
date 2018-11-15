import React from "react";
import Game from "./components/game/Game";
import { connect } from "react-redux";
import "./App.css";

const App = props => (
  <div className="App">
    {props.games.map(game => (
      <Game />
    ))}
  </div>
);

const mapDispatchToProps = dispatch => {
  return {
    AddGame: game =>
      dispatch({
        type: "Add_Game",
        game
      })
  };
};

const mapStateToProps = function(state) {
  return {
    games: state.games
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
