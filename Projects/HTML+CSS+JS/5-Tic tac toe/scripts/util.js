const createDynamicArray = (numberCellsBoard) => {
  let board = [];
  for (let i = 0; i < numberCellsBoard; i++) {
    board.push(Array.from({ length: numberCellsBoard }, () => "_"));
  }
  return board;
};

const getPlaceCell = (index, numberCellsBoard) => {
  const row = Math.floor(index / numberCellsBoard);
  const col = index % numberCellsBoard;
  return [row, col];
};

const checkRows = (currerntPlayer, numberCellsBoard, board) => {
  let col = 0;
  for (let row = 0; row < numberCellsBoard; row++) {
    while (col < numberCellsBoard) {
      if (board[row][col] !== currerntPlayer) {
        col = 0;
        break;
      }
      col++;
    }
    if (col === numberCellsBoard) {
      return true;
    }
  }
};

const checkColumns = (currerntPlayer, numberCellsBoard, board) => {
  let row = 0;
  for (let col = 0; col < numberCellsBoard; col++) {
    while (row < numberCellsBoard) {
      if (board[row][col] !== currerntPlayer) {
        row = 0;
        break;
      }
      row++;
    }
    if (row === numberCellsBoard) {
      return true;
    }
  }
};

const checkDiagonals = (currerntPlayer, numberCellsBoard, board) => {
  let count = 0;
  for (let row = 0; row < numberCellsBoard; row++) {
    if (board[row][count] === currerntPlayer) {
      count++;
    }
  }
  if (count === numberCellsBoard) {
    return true;
  }
};

const checkReverseDiagonals = (currerntPlayer, numberCellsBoard, board) => {
  let count = numberCellsBoard - 1;
  for (let row = 0; row < numberCellsBoard; row++) {
    if (board[row][count] === currerntPlayer) {
      count--;
    }
  }
  if (count === -1) {
    return true;
  }
};

const drawMarkInCell = (cell, currerntPlayer) => {
  cell.querySelector(".value").textContent = currerntPlayer;
  cell.classList.add(`cell--${currerntPlayer}`);
};

export {
  createDynamicArray,
  getPlaceCell,
  checkRows,
  checkColumns,
  drawMarkInCell,
  checkDiagonals,
  checkReverseDiagonals,
};
