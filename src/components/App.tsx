import React, { useState, useEffect } from "react";
import Backtrack from "../utils/Backtrack";
import Board from "../utils/Board";
import Instructions from "./Instructions";
import Title from "./Title";
import Presets from "./Presets";
import Sudoku from "./Board/Sudoku";
import Controls from "./Controls";
import Results from "./Board/Results";
import Overlay from "./Board/Overlay";

const VALID_CHARS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const App: React.FC = () => {
  const [board, setBoard] = useState<string>("");
  const [isSolving, setIsSolving] = useState<boolean>(false);
  const [selectedPreset, setSelectedPreset] = useState<string>("");
  const [isVerified, setIsVerified] = useState<boolean | null>(null);
  const [result, setResult] = useState<BacktrackResult | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const charsLeft = 81 - board.length;

  useEffect(() => {
    // board validation
    if (board.length === 81) {
      setIsVerified(board.includes("0"));
    } else {
      setIsVerified(false);
    }
  }, [board]);

  const onPresetSelect = (preset: string): void => {
    onReset();
    setSelectedPreset(preset);
    setBoard(preset);
  };

  const onSolve = (board: string): void => {
    if (isVerified) {
      setIsSolving(true);
      Board.create(board);

      setTimeout(() => {
        const res: BacktrackResult = Backtrack.solve(Board);
        setResult(res);
        setIsSolving(false);
      }, 150);
    }
  };

  const onReset = () => {
    setSelectedPreset("");
    setBoard("");
    setResult(null);
    setShowResult(false);
  };

  const onKeyDown = ({ key }) => {
    if (key === "Backspace" && board.length !== 0) {
      setBoard(board.slice(0, board.length - 1));
    }

    if (charsLeft === 0 || !VALID_CHARS.includes(key)) {
      return null;
    }

    setBoard(board + key);
  };

  return (
    <div
      tabIndex={0}
      onKeyDown={onKeyDown}
      className="min-h-screen py-2 antialiased font-light min-w-min md:py-6 md:flex md:flex-col md:justify-center bg-gradient-to-b from-blue-400 to-blue-800 focus:outline-none font-base"
    >
      <div className="container mx-auto">
        <Title />
        <Presets onPresetSelect={onPresetSelect} selected={selectedPreset} />
        <Instructions
          hidden={!!result}
          onKeyDown={onKeyDown}
          charsLeft={charsLeft}
        />
        <Sudoku
          base={board}
          solution={result?.solution || ""}
          showResult={showResult}
        >
          <Overlay show={isSolving || (!!result && !showResult)}>
            <>
              {isSolving && "Solving..."}
              <Results isVerified={isVerified} result={result} />
            </>
          </Overlay>
        </Sudoku>

        <Controls
          isSolving={isSolving}
          onSolve={() => onSolve(board)}
          onReset={onReset}
          toggleShowResult={() => setShowResult(!showResult)}
          charsLeft={charsLeft}
          isVerified={isVerified}
          hasResult={!!result}
          showResult={showResult}
        />
      </div>
    </div>
  );
};

export default App;
