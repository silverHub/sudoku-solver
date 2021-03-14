import * as React from "react";
import { getBlock } from "../utils/Board";

export interface CellProps {
  row: number;
  col: number;
  value: string;
}


export interface ContentProps {
  value: string,
  bg: string
}

const Content: React.FC<ContentProps> = ({ value, bg }) => {
  return (
    <div className={`flex justify-center items-center h-14 transition-bg-opacity easy-in duration-150 ${bg} ${value ? "bg-opacity-70" : "bg-opacity-0"
      }`} >
      <span className=" text-2xl text-shadow-lg text font-board font-semibold text-white">
        {value && value.replace("0", ".")}
      </span>
    </div >
  );
}


const Cell: React.FC<CellProps> = ({ row, col, value }) => (
  <div
    key={row + col}
    className={`w-14 h-14 mr-0.5 mb-0.5 border-dashed ${!value ? 'border' : ''} border-white border-opacity-50 rounded`}
  >
    <Content value={value} bg={getBlock(row, col) % 2 === 0 ? "bg-yellow-500" : "bg-yellow-600"} />
  </div>
);

export default Cell;
