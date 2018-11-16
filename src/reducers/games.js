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
    currentWord: [],
    wordList: {}
  },
  {
    id: 1,
    board,
    boardStatus,
    players: [],
    dice,
    currentWord: [],
    wordList: []
  }
];

const games = (state = testGames, action) => {
  switch (action.type) {
    case "Update_Clicked":
      var updatedBoard = state[action.boardIndex];
      if (validateMove(action.squareIndex, updatedBoard)) {
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
    case "Submit_Word":
      if (
        state[action.boardIndex].wordList[action.word] === undefined &&
        action.word.split("-").length > 2
      ) {
        //add word
        updatedBoard = state[action.boardIndex];
        updatedBoard.wordList = { ...updatedBoard.wordList };
        updatedBoard.wordList[action.word] = true;
        //untoggle letters
        updatedBoard.boardStatus = updatedBoard.boardStatus.slice();
        action.word
          .split("-")
          .forEach(index => (updatedBoard.boardStatus[index] = false));
        //clear current word
        updatedBoard.currentWord = [];
        return [
          ...state.slice(0, action.boardIndex),
          updatedBoard,
          ...state.slice(action.boardIndex + 1)
        ];
      } else {
        //don't add word
        return state;
      }
    default:
      return state;
  }
};

const validateMove = (index, board) => {
  const lastLetter = board.currentWord.length - 1;
  if (board.currentWord.length === 0) return true;
  if (board.currentWord[lastLetter] === index) return true;
  if (
    adjacencyChecker(
      rowAndColumnFinder(index),
      rowAndColumnFinder(board.currentWord[lastLetter])
    ) &&
    !board.boardStatus[index]
  )
    return true;
  return false;
};

const rowAndColumnFinder = index => {
  const column = index % 4;
  const row = Math.floor(index / 4);
  return [row, column];
};

const adjacencyChecker = (coords1, coords2) => {
  return (
    Math.abs(coords1[0] - coords2[0]) < 2 &&
    Math.abs(coords1[1] - coords2[1]) < 2
  );
};

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
