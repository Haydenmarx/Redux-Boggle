const testGames = [
  { id: 0, board: [], players: [], dice: [] },
  { id: 1, boad: [], players: [], dice: [] }
];

const games = (state = testGames, action) => {
  switch (action.type) {
    case "Something":
      return [...action.something, ...state];
    default:
      return state;
  }
};

export default games;
