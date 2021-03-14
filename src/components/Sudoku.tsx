import * as React from "react";
import Cell from "./Cell";

export interface SudokuProps {
  board: string;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const getValue = (row: number, col: number, board: string): string => {
  if (row < 1 || row > 9 || col < 1 || col > 9) return "";
  const startInd = (row - 1) * 9;
  const slice = board.slice(startInd, startInd + 10);
  return slice[col - 1];
};

const Sudoku: React.FC<SudokuProps> = ({ board }) => {
  return (
    <div
      className="flex flex-wrap mx-auto w-sud-sm xl:w-sud-bg h-sud-sm xl:h-sud-bg"
    // style={{ width: "522px", height: "522px" }}
    //style={{ width: "270px", height: "270px" }}
    >
      {arr.map((row) =>
        arr.map((col) => (
          <Cell
            key={row + col}
            row={row}
            col={col}
            value={getValue(row, col, board)}
          />
        ))
      )}
    </div>
  );
};

export default Sudoku;
