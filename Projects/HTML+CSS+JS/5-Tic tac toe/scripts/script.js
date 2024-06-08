import {
  createDynamicArray,
  getPlaceCell,
  checkRows,
  checkColumns,
  drawMarkInCell,
  checkDiagonals,
  checkReverseDiagonals,
} from "./util.js";

const resetButton = document.querySelector("#reset");
const popupMessage = document.querySelector("#popup__message");
const popupWrapper = document.getElementById("popup__wrapper");
const btnCancel = document.getElementById("popup__close");

let numberCellsBoard = 3;
let currerntPlayer = "X";
const turns = numberCellsBoard ** 2;
let turnsCounter = 0;

let board = createDynamicArray(numberCellsBoard);

const checkWin = (currerntPlayer) => {
  if (
    checkRows(currerntPlayer, numberCellsBoard, board) ||
    checkColumns(currerntPlayer, numberCellsBoard, board) ||
    checkDiagonals(currerntPlayer, numberCellsBoard, board) ||
    checkReverseDiagonals(currerntPlayer, numberCellsBoard, board)
  ) {
    return true;
  }
};

const runWin = (currerntPlayer) => {
  setTimeout(() => {
    popupMessage.textContent = `Player ${currerntPlayer} is  the winner!`;
    popupWrapper.classList.add("show");
    resetBoard();
  }, 500);
};

const runDraw = () => {
  setTimeout(() => {
    popupMessage.textContent = "It's a draw!";
    popupWrapper.classList.add("show");
    resetBoard();
  }, 500);
};

const handleClick = (event, index) => {
  const cell = event.target;
  const [row, col] = getPlaceCell(index, numberCellsBoard);

  if (board[row][col] === "_") {
    turnsCounter++;
    board[row][col] = currerntPlayer;
    drawMarkInCell(cell, currerntPlayer);

    if (checkWin(currerntPlayer)) runWin(currerntPlayer);
    else {
      turnsCounter === turns && runDraw();
      currerntPlayer = currerntPlayer === "X" ? "O" : "X";
    }
  }
};

const createBoard = () => {
  const container = document.querySelector(".container");
  const board = document.createElement("div");
  board.classList.add("board");

  for (let i = 0; i < turns; i++) {
    const createCellString = `<button class="cell" aria-label="cell of game"><span class="value"></span></button>`;
    const createCell = document
      .createRange()
      .createContextualFragment(createCellString);

    createCell.querySelector(".cell").onclick = (event) =>
      handleClick(event, i);

    board.appendChild(createCell);
    document.documentElement.style.setProperty("--grid-rows", numberCellsBoard);
  }

  container.insertAdjacentElement("afterbegin", board);
};

const resetBoard = () => {
  document.querySelector(".board").remove();
  createBoard();
  board = createDynamicArray(numberCellsBoard);

  currerntPlayer = "X";
  turnsCounter = 0;
};

resetButton.addEventListener("click", resetBoard);
createBoard();

btnCancel.onclick = function () {
  popupWrapper.classList.remove("show");
};

window.onclick = function (event) {
  if (event.target == popupWrapper) {
    popupWrapper.classList.remove("show");
  }
};
