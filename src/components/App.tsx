import React, { useState } from "react";
import Backtrack from "../utils/Backtrack";
import Board from "../utils/Board";
import Sudoku from "./Sudoku";

const HARD =
  "000004105070005903000923040809000500020050070051006000307200000000400200000560801";
const MEDIUM =
  "071000382000001000300008006060102430040560010800000009000000620030014000100607940";
const EASY =
  "390020780001000040500910306009002430600849017200030500467001050005006170000300000";
const EMPTY =
  "000000000000000000000000000000000000000000000000000000000000000000000000000000000";

const PRESET = [['EMPTY', EMPTY], ['EASY', EASY], ['MEDIUM', MEDIUM], ['HARD', HARD]];

const VALID_CHARS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const App: React.FC = () => {
  const [board, setBoard] = useState<string>("");
  const [isSolving, setIsSolving] = useState(false);
  const charsLeft = 81 - board.length;
  const boardReady = charsLeft === 0;

  const onSolve = (board: string) => {
    setIsSolving(true);
    Board.create(board);

    setTimeout(() => {
      const res: BacktrackResult = Backtrack.solve(Board);
      setIsSolving(false);
      setBoard(res[1]);
    }, 0);
  };

  const onPresetSelect = (e) => {
    e.target?.dataset?.preset && setBoard(e.target.dataset.preset);
  };

  const onKeyDown = ({ key }) => {
    console.log(key);
    if (charsLeft === 0) {
      return null;
    }

    if (key === 'Backspace') {
      setBoard(board.slice(0, board.length - 1))
    }

    VALID_CHARS.includes(key) &&
      setBoard(board + key)
  };

  return (
    <div
      tabIndex={0}
      onKeyDown={onKeyDown}
      className="min-h-screen  py-6 flex flex-col justify-center antialiased bg-gradient-to-b from-blue-400 to-blue-800">
      <div className="container mx-auto">
        <h1 className="w-auto text-center p-5 text-gray-50 mb-5 ">
          <span className="text-shadow-md text-6xl font-title uppercase tracking-tight">
            Sudoku-solver
          </span>
        </h1>
        <div className="flex flex-col p-4 text-white">
          <h2 className="text-2xl mb-3 text-center">Presets</h2>
          <ul
            className="flex justify-center gap-4"
            onClick={(e) => onPresetSelect(e)}
          >
            {PRESET.map(([key, value]) => (<li
              key={key}
              className="cursor-pointer rounded-md border-gray-50 border p-2 hover:shadow-xl"
              data-preset={value}
            >
              {key}
            </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col xl:mx-12">
          <div className="xl:mr-6 my-6 text-center h-24">
            <h2
              className="text-2xl text-gray-50 mb-3 text-center animate-pulse">
              Type to create a board, use only numbers and 0 for the empty cell
            </h2>
            <div className="text-white italic inline-block font-light ml-5 leading-4 mt-4">
              <span className="text-2xl">{charsLeft}</span> character left
                </div>
          </div>
        </div>
        <Sudoku board={board} />

        {isSolving && (
          <span className="absolute inset-0 grid place-items-center opacity-75 text-3xl  text-white bg-black">
            Loading...
          </span>
        )}

        <div className="flex justify-center space-x-4 mt-4 h-12">
          <button
            hidden={!boardReady}
            type="button"
            className="p-3 tracking-wider bg-green-600 shadow-md text-white  rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none focus:ring-offset-gray-600 focus:ring-offset-2"
            onClick={() => onSolve(board)}
          >
            Solve
            </button>
          <button
            type="button"
            hidden={charsLeft === 81}
            className="p-3 tracking-wider bg-red-500 shadow-md text-white  rounded-lg  focus:ring-2 focus:ring-yellow-400 focus:outline-none focus:ring-offset-gray-600 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => setBoard("")}
          >
            Reset
                </button>


        </div>

      </div>
    </div>
  );
};

export default App;
