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
    dice,
    currentWord: []
  },
  {
    id: 1,
    board,
    boardStatus,
    players: [],
    dice,
    currentWord: []
  }
];

const games = (state = testGames, action) => {
  switch (action.type) {
    case "Update_Clicked":
      if (validateMove(action.squareIndex)) {
        var updatedBoard = state[action.boardIndex];
        updatedBoard.boardStatus = state[action.boardIndex].boardStatus.slice();
        updatedBoard.boardStatus[action.squareIndex] = !updatedBoard
          .boardStatus[action.squareIndex];
        updatedBoard.currentWord = updatedBoard.currentWord.slice();
        if (state[action.boardIndex].boardStatus[action.squareIndex]) {
          updatedBoard.currentWord.push(action.squareIndex);
        } else {
          updatedBoard.currentWord.pop();
        }
        return [
          ...state.slice(0, action.boardIndex),
          updatedBoard,
          ...state.slice(action.boardIndex + 1)
        ];
      }
      return state;
    case "Randomize_Board":
      updatedBoard = state[action.boardIndex];
      const newBoard = randomize(action.dice);
      updatedBoard.board = newBoard;
      return [
        ...state.slice(0, action.boardIndex),
        updatedBoard,
        ...state.slice(action.boardIndex + 1)
      ];
    default:
      return state;
  }
};

const validateMove = index => {
  //actual validation to be added
  return true;
};

const rowAndColumnFinder = index => {
  const column = Math.abs(index % 4);
  const row = Math.floor(Math.abs(index / 4));
  return [row, column];
};

const addOrRemove = index => {};

const randomize = dice => {
  let board = dice.map(die => randomizeItem(die, true));
  randomizeRow(board);
  return board;
};
const randomizeRow = arr => {
  let newArr = arr.slice();
  let result = [];
  let found;
  while (newArr.length > 0) {
    found = Math.floor(Math.random() * newArr.length);
    result.push(newArr[found]);
    newArr.splice(found, 1);
  }
  return result;
};
const randomizeItem = arr => {
  let newArr = arr.slice();
  const found = Math.floor(Math.random() * newArr.length);
  return newArr[found];
};

export default games;
