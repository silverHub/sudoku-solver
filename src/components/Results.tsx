export interface ResultsProps {
  isVerified: boolean | null;
  result: BacktrackResult | null;
}

const Results: React.FC<ResultsProps> = ({ isVerified, result }) => {
  const { isSolutionFound, error, statistics } = result || {};
  const { elapsedTime, nbrOfIteration } = statistics || {};

  if (!result) {
    return null;
  }

  return (
    <div className="py-4 mx-auto text-center w-sud-sm md:w-sud-bg">
      <span className="text-3xl font-bold text-red-400 animate-pulse">
        {isVerified === false ? "Invalid Sudoku" : ""}
      </span>

      <div
        hidden={!isVerified}
        className="flex flex-col justify-between mx-auto text-gray-50"
      >
        <h3>{isSolutionFound ? "Solution found 😊" : "No solution 😢"}</h3>
        <span hidden={!error}> Error happened: {JSON.stringify(error)}</span>
        <span hidden={!elapsedTime}> Elapsed time: 14.12 sec</span>
        <span hidden={!nbrOfIteration}>Iterations: {nbrOfIteration}</span>
      </div>
    </div>
  );
};

export default Results;
