import React from "react";
import { connect } from "react-redux";

const Square = props => {
  return (
    <div>
      <button>{props.square}</button>
    </div>
  );
};

const mapStateToProps = function(state, ownProps) {
  return {
    square: state.games[ownProps.gameIndex].board[ownProps.squareIndex]
  };
};

export default connect(mapStateToProps)(Square);
