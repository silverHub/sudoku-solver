import * as React from "react";
import { getBlock } from "../../utils/Board";

export interface CellProps {
  row: number;
  col: number;
  value: string;
}

export interface ContentProps {
  value: string;
  bg: string;
}

const Content: React.FC<ContentProps> = ({ value, bg }) => {
  return (
    <div
      className={`flex justify-center items-center h-7 md:h-14 rounded ${bg} ${
        value ? "bg-opacity-70" : "bg-opacity-0"
      }`}
    >
      <span className="font-semibold text-white md:text-2xl text-shadow-lg font-board">
        {value && value.replace("0", ".")}
      </span>
    </div>
  );
};

const Cell: React.FC<CellProps> = ({ row, col, value }) => (
  <div
    key={row + col}
    className={` w-7 h-7 md:w-14 md:h-14 mr-0.5 mb-0.5 border-dashed ${
      !value ? "border" : ""
    } border-white border-opacity-50 rounded`}
  >
    <Content
      value={value}
      bg={getBlock(row, col) % 2 === 0 ? "bg-yellow-500" : "bg-yellow-600"}
    />
  </div>
);

export default Cell;
