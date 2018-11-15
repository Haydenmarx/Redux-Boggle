const testDice = [
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

const testBoard = [
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

const testGames = [
  { id: 0, board: testBoard, players: [], testDice: testDice },
  { id: 1, board: [], players: [], testDice: [] }
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