export interface ControlsProps {
  isSolving: boolean;
  onSolve: () => void;
  onReset: () => void;
  onShowResult: () => void;
  charsLeft: number;
  isVerified: boolean | null;
  hasResult: boolean;
}

const Controls: React.FC<ControlsProps> = ({
  isSolving,
  onSolve,
  onReset,
  onShowResult,
  charsLeft,
  isVerified,
  hasResult,
}) => {
  return (
    <div className="flex justify-center mt-2 space-x-2 text-xs md:text-base md:mt-4 md:space-x-4 md:h-12">
      <button
        disabled={isSolving || !isVerified}
        hidden={hasResult}
        type="button"
        className="p-2 tracking-wider text-white bg-green-600 rounded-lg shadow-md transform transition  hover:bg-green-500 hover:-translate-y-0.5 md:p-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none focus:ring-offset-gray-600 focus:ring-offset-2 disabled:opacity-40 disabled:transform-none disabled:bg-green-600 disabled:cursor-default"
        onClick={onSolve}
      >
        Solve
      </button>
      <button
        hidden={!hasResult}
        type="button"
        className="p-2 tracking-wider text-white bg-green-600 rounded-lg shadow-md transform transition  hover:bg-green-500 hover:-translate-y-0.5 md:p-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none focus:ring-offset-gray-600 focus:ring-offset-2 disabled:opacity-40 disabled:transform-none disabled:bg-green-600 disabled:cursor-default"
        onClick={onShowResult}
      >
        Show solution
      </button>
      <button
        type="button"
        disabled={isSolving || charsLeft === 81}
        className="p-2 tracking-wider text-white bg-red-500 rounded-lg transform transition  hover:bg-red-400 hover:-translate-y-0.5 shadow-md md:p-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none focus:ring-offset-gray-600 focus:ring-offset-2 disabled:opacity-40 disabled:transform-none disabled:bg-red-500 disabled:cursor-default"
        onClick={onReset}
      >
        Reset
      </button>
    </div>
  );
};

export default Controls;
