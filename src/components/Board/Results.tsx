export interface ResultsProps {
  isVerified: boolean | null;
  result: BacktrackResult | null;
}

const Results: React.FC<ResultsProps> = ({ isVerified, result }) => {
  const { isSolutionFound, error, statistics } = result || {};
  const { elapsedTime = 0, nbrOfIteration } = statistics || {};

  if (!result) {
    return null;
  }

  return (
    <div className="w-full h-full py-4 mx-auto text-center">
      <span className="text-3xl font-bold text-red-400 animate-pulse">
        {isVerified === false ? "Invalid Sudoku" : ""}
      </span>

      <div
        hidden={!isVerified}
        className="flex flex-col justify-center h-full mx-auto text-xs md:text-2xl text-gray-50"
      >
        <h3 className="h-16 text-2xl font-semibold md:h-36 md:text-4xl">
          {isSolutionFound ? "Solution found 😊" : "No solution 😢"}
        </h3>
        <span hidden={!error}> Error happened: {JSON.stringify(error)}</span>
        <span hidden={!elapsedTime}>
          Elapsed time: {elapsedTime.toFixed(2)} msec
        </span>
        <span hidden={!nbrOfIteration}>Iterations: {nbrOfIteration}</span>
      </div>
    </div>
  );
};

export default Results;
