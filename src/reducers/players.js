const players = (state = [], action) => {
  switch (action.type) {
    case "Something":
      return [...action.something, ...state];
    default:
      return state;
  }
};

export default players;
