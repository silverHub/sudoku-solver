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
    }, 150);
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
    <div tabIndex={0}
      onKeyDown={onKeyDown}
      className="min-h-screen py-2 antialiased min-w-min xl:py-6 xl:flex xl:flex-col xl:justify-center bg-gradient-to-b from-blue-400 to-blue-800 focus:outline-none">
      <div className="container mx-auto">
        <h1 className="p-5 text-center xl:mb-5 text-gray-50 ">
          <span className="text-4xl tracking-tight uppercase xl:text-6xl text-shadow-md font-title">
            Sudoku-solver
          </span>
        </h1>
        <div className="flex flex-col text-white xl:p-4">
          <h2 className="mb-3 tracking-wider text-center xl:text-2xl">Presets</h2>
          <ul
            className="flex justify-center gap-4"
            onClick={(e) => onPresetSelect(e)}
          >
            {PRESET.map(([key, value]) => (<li
              key={key}
              className="p-2 text-xs border rounded-md cursor-pointer xl:text-base border-gray-50 hover:shadow-xl"
              data-preset={value}
            >
              {key}
            </li>
            ))}
          </ul>
        </div>
        <div className="xl:mx-12">
          <div className="my-6 text-center xl:mr-6">
            {/*             <h2
              className="mb-3 text-2xl text-center text-gray-50 animate-pulse">
              Type to create a board
            </h2>
 */}            <p className="leading-loose xl:text-xl text-gray-50 text-shadow "
            >
              Type <kbd>0</kbd> for empty, <kbd>1</kbd><kbd>2</kbd><kbd>3</kbd><kbd>4</kbd><kbd>5</kbd><kbd>6</kbd><kbd>7</kbd><kbd>8</kbd><kbd>9</kbd> for values and <kbd>Backspace</kbd> for delete
            </p>
            <div className="inline-block mt-4 ml-5 italic font-light leading-4 text-white">
              <span className="text-2xl font-normal">{charsLeft}</span> character left
                </div>
          </div>
        </div>
        <Sudoku board={board} isSolving={isSolving} />
        <div className="flex justify-center mt-2 space-x-2 text-xs xl:text-base xl:mt-4 xl:space-x-4 xl:h-12">
          <button
            hidden={!boardReady}
            type="button"
            className="p-2 tracking-wider text-white bg-green-600 rounded-lg shadow-md xl:p-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none focus:ring-offset-gray-600 focus:ring-offset-2"
            onClick={() => onSolve(board)}
          >
            Solve
            </button>
          <button
            type="button"
            hidden={charsLeft === 81}
            className="p-2 tracking-wider text-white bg-red-500 rounded-lg shadow-md xl:p-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none focus:ring-offset-gray-600 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
