const dice = [
  ["A", "A", "E", "E", "G", "N"],
  ["A", "B", "B", "J", "O", "O"],
  ["A", "C", "H", "O", "P", "S"],
  ["A", "C", "H", "O", "P", "S"],
  ["A", "O", "O", "T", "T", "W"],
  ["C", "I", "M", "O", "T", "U"],
  ["D", "E", "I", "L", "R", "X"],
  ["D", "E", "L", "R", "V", "Y"],
  ["D", "I", "S", "T", "T", "Y"],
  ["E", "E", "G", "H", "N", "W"],
  ["E", "E", "I", "N", "S", "U"],
  ["E", "H", "R", "T", "V", "W"],
  ["E", "I", "O", "S", "S", "T"],
  ["E", "L", "R", "T", "T", "Y"],
  ["H", "I", "M", "N", "U", "Qu"],
  ["H", "L", "N", "N", "R", "Z"]
];

const board = [
  "A",
  "B",
  "C",
  "O",
  "T",
  "M",
  "L",
  "D",
  "D",
  "E",
  "N",
  "R",
  "S",
  "T",
  "M",
  "Z"
];

const boardStatus = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false
];

const testGames = [
  {
    id: 0,
    board,
    boardStatus,
    players: [],
    dice
  },
  {
    id: 1,
    board,
    boardStatus,
    players: [],
    dice
  }
];

const games = (state = testGames, action) => {
  switch (action.type) {
    case "Update_Clicked":
      let updatedBoard = state[action.boardIndex];
      updatedBoard.boardStatus = state[action.boardIndex].boardStatus.slice();
      updatedBoard.boardStatus[action.squareIndex] = !updatedBoard.boardStatus[
        action.squareIndex
      ];
      return [
        ...state.slice(0, action.boardIndex),
        updatedBoard,
        ...state.slice(action.boardIndex + 1)
      ];
    default:
      console.log("default:", action);
      return state;
  }
};

export default games;
