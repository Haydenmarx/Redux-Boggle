import React from "react";
import { connect } from "react-redux";

const Board = props => {
  return <div>{console.log(props.game)}</div>;
};

const mapStateToProps = function(state, ownProps) {
  return {
    game: state.games[ownProps.index]
  };
};

export default connect(mapStateToProps)(Board);
