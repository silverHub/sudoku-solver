import * as React from "react";

const Title: React.FC = () => {
  return (
    <h1 className="p-5 text-center md:mb-5 text-gray-50 ">
      <span className="text-4xl tracking-tight uppercase md:text-6xl text-shadow-md font-title">
        Sudoku-solver
      </span>
    </h1>
  );
};

export default Title;
