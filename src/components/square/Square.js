import React from "react";
import { connect } from "react-redux";
import "./Square.css";

const Square = props => {
  return (
    <div className="container">
      <button className="">{props.square}</button>
    </div>
  );
};

const mapStateToProps = function(state, ownProps) {
  return {
    square: state.games[ownProps.gameIndex].board[ownProps.squareIndex]
  };
};

export default connect(mapStateToProps)(Square);
