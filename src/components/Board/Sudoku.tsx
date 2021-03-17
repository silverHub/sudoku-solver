import * as React from "react";
import Cell from "./Cell";

export interface SudokuProps {
  base: string;
  solution: string;
  showResult: boolean;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const getValue = (row: number, col: number, board: string): string => {
  if (row < 1 || row > 9 || col < 1 || col > 9) return "";
  const startInd = (row - 1) * 9;
  const slice = board.slice(startInd, startInd + 10);
  return slice[col - 1];
};

const Sudoku: React.FC<SudokuProps> = ({
  base,
  solution,
  showResult,
  children,
}) => {
  return (
    <div className="relative flex flex-wrap mx-auto w-sud-sm md:w-sud-bg h-sud-sm md:h-sud-bg">
      {arr.map((row) =>
        arr.map((col) => (
          <Cell
            key={row + col}
            row={row}
            col={col}
            value={getValue(row, col, base)}
          />
        ))
      )}
      {children}
    </div>
  );
};

export default Sudoku;
