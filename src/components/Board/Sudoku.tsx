import * as React from "react";
import Cell from "./Cell";
import CellContent from "./CellContent";
import { getBlock } from "../../utils/Board";

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
        arr.map((col) => {
          const baseValue: string = getValue(row, col, base);
          const value: string =
            showResult && baseValue === "0" && solution
              ? getValue(row, col, solution)
              : baseValue;

          return (
            <Cell key={row + col} showBorder={!value}>
              <CellContent
                isVisible={!!value}
                bg={
                  getBlock(row, col) % 2 === 0
                    ? "bg-yellow-500"
                    : "bg-yellow-600"
                }
              >
                {value && value.replace("0", ".")}
              </CellContent>
            </Cell>
          );
        })
      )}
      {children}
    </div>
  );
};

export default Sudoku;
