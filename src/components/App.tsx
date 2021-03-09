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

  return (
    <div className="min-h-screen  py-6 flex flex-col justify-center antialiased bg-gradient-to-b from-blue-400 to-blue-800">
      <div className="container mx-auto">
        <h1 className="w-auto text-center p-5 text-gray-50 mb-10 ">
          <span className="text-shadow-md text-6xl font-title uppercase tracking-tight">
            Sudoku-solver
          </span>
        </h1>

        <div className="flex xl:mx-12">
          <div className="flex-1 xl:mr-6 my-6 bg-opacity-5">
            <div className="flex flex-col mx-auto p-4">
              <h2 className="text-2xl text-gray-50 mb-3 text-center">
                {boardReady
                  ? "Board complete"
                  : "Type in the sudoku values to create a board"}
              </h2>
              <div className="flex items-center">
                <input
                  id="sudoku-string"
                  autoFocus
                  maxLength={81}
                  onChange={(e) =>
                    (VALID_CHARS.includes(e.target.value.slice(-1)) ||
                      e.target.value.length === 0) &&
                    setBoard(e.target.value)
                  }
                  className="flex-1 my-6 p-3 text-xl text-gray-600 font-medium placeholder-gray-400 focus:ring-4 focus:ring-yellow-400 focus:outline-none focus:ring-offset-blue-500 focus:ring-offset-2"
                  placeholder="type in the numbers, use 0 for empty spaces"
                  value={board}
                />
                <span className="text-white italic inline-block font-light ml-5">
                  {charsLeft} character left
                </span>
              </div>
              <div className="flex justify-center space-x-4">
                {boardReady && (
                  <button
                    type="button"
                    className="p-3 bg-green-600 shadow-md text-white  rounded-lg font-semibold tracking-wide focus:ring-2 focus:ring-yellow-400 focus:outline-none focus:ring-offset-gray-600 focus:ring-offset-2"
                    onClick={() => onSolve(board)}
                  >
                    Backtrack
                  </button>
                )}

                <button
                  type="button"
                  disabled={charsLeft === 81}
                  className="p-3 bg-red-600 shadow-md text-white  rounded-lg font-semibold tracking-wide focus:ring-2 focus:ring-yellow-400 focus:outline-none focus:ring-offset-gray-600 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => setBoard("")}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col my-6 bg-gray-600 p-4 text-white">
            <h2 className="text-2xl mb-3 text-center">Presets</h2>
            <ul
              className="space-y-3 font-light"
              onClick={(e) => onPresetSelect(e)}
            >
              <li
                className="cursor-pointer rounded-md border-gray-50 border p-2"
                data-preset={EMPTY}
              >
                EMPTY
              </li>
              <li
                className="cursor-pointer rounded-md border-gray-50 border p-2"
                data-preset={EASY}
              >
                EASY
              </li>
              <li
                className="cursor-pointer rounded-md border-gray-50 border p-2"
                data-preset={MEDIUM}
              >
                MEDIUM
              </li>
              <li
                className="cursor-pointer rounded-md border-gray-50 border p-2"
                data-preset={HARD}
              >
                HARD
              </li>
            </ul>
          </div>
        </div>
        <Sudoku board={board} />
        {isSolving && (
          <span className="absolute inset-0 grid place-items-center opacity-75 text-3xl  text-white bg-black">
            Loading...
          </span>
        )}
      </div>
    </div>
  );
};

export default App;
