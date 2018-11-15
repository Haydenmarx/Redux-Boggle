import React from "react";
import { connect } from "react-redux";
import "./Square.css";

const Square = props => {
  const toggleClicked = () => {
    props.ToggleClicked(props.gameIndex, props.squareIndex);
  };
  return (
    <div className="container">
      <button onClick={toggleClicked} className={props.status ? "chosen" : ""}>
        {props.square}
      </button>
    </div>
  );
};

const mapStateToProps = function(state, ownProps) {
  return {
    square: state.games[ownProps.gameIndex].board[ownProps.squareIndex],
    status: state.games[ownProps.gameIndex].boardStatus[ownProps.squareIndex]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ToggleClicked: (boardIndex, squareIndex) =>
      dispatch({
        type: "Update_Clicked",
        boardIndex,
        squareIndex
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Square);
