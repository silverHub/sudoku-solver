import * as React from "react";

export interface CellProps {
  showBorder: boolean;
}

const Cell: React.FC<CellProps> = ({ children, showBorder }) => (
  <div
    className={` w-7 h-7 md:w-14 md:h-14 mr-0.5 mb-0.5 border-dashed ${
      showBorder ? "border" : ""
    } border-white border-opacity-50 rounded`}
  >
    {children}
  </div>
);

export default Cell;
