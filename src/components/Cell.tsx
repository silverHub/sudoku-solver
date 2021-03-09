import * as React from "react";
import { getBlock } from "../utils/Board";

export interface CellProps {
  row: number;
  col: number;
  value: string;
}

const Cell: React.FC<CellProps> = ({ row, col, value }) => (
  <div
    key={row + col}
    className={`w-14 h-14 mr-0.5 mb-0.5 
      transition-opacity easy-in duration-300 border-dashed border-2 border-black ${
        value ? "opacity-100" : "opacity-0"
      } 
      ${
        getBlock(row, col) % 2 === 0 ? "bg-gray-700" : "bg-gray-800"
      } flex justify-center items-center text-gray-400`}
  >
    <span className="text-2xl font-sans font-semibold text-white transition">
      {value && value.replace("0", ".")}
    </span>
  </div>
);

export default Cell;
