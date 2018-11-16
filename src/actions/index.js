export const Action = (id, name) => ({
  type: "Action_Type",
  id,
  name
});

export const UpdateDieClicked = (boardIndex, squareIndex) => ({
  type: "Update_Clicked",
  boardIndex,
  squareIndex
});

export const RandomizeBoard = (boardIndex, dice) => ({
  type: "Randomize_Board",
  boardIndex,
  dice
});

export const SubmitWord = (boardIndex, word) => ({
  type: "Submit_Word",
  boardIndex,
  word
});
