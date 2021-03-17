export interface CellContentProps {
  isVisible: boolean;
  bg: string;
}

const CellContent: React.FC<CellContentProps> = ({
  children,
  isVisible,
  bg,
}) => {
  return (
    <div
      className={`flex justify-center items-center h-7 md:h-14 rounded ${bg} ${
        isVisible ? "bg-opacity-70" : "bg-opacity-0"
      }`}
    >
      <span className="font-semibold text-white md:text-2xl text-shadow-lg font-board">
        {children}
      </span>
    </div>
  );
};

export default CellContent;
