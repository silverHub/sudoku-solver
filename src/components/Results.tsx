export interface ResultsProps {
  isVerified: boolean | null;
  result: BacktrackResult | null;
}

const Results: React.FC<ResultsProps> = ({ isVerified, result }) => {
  return (
    <div className="py-4 mx-auto text-center w-sud-sm md:w-sud-bg">
      <span className="text-3xl font-bold text-red-400 animate-pulse">
        {isVerified === false ? "Invalid Sudoku" : ""}
      </span>
    </div>
  );
};

export default Results;
