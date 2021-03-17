export const isDistinct = (map: Map<string, number>): boolean => {
  const s = new Set(map.values());
  return s.size === map.size;
};

export const getIndex = (
  key: string
): { row: number; col: number; block: number } => {
  return {
    row: parseInt(key[0], 10),
    col: parseInt(key[1], 10),
    block: parseInt(key[2], 10),
  };
};

export const isValid = (
  { row, col, block }: { row: number; col: number; block: number },
  board: Board
) => {
  return (
    isDistinct(board.row(row)) &&
    isDistinct(board.col(col)) &&
    isDistinct(board.block(block))
  );
};

export const findNextValue = (
  cell: [string, number],
  board: Board
): [boolean, number | null] => {
  const [key, value] = cell;
  const ind = getIndex(key);
  let newValue = value;

  do {
    board.set(ind.row, ind.col, ++newValue);
    board.print();
  } while (newValue < 10 && !isValid(ind, board));

  if (newValue === 10) {
    board.set(ind.row, ind.col, 0);
    return [false, null];
  } else {
    board.set(ind.row, ind.col, newValue);
    return [true, newValue];
  }
};

const  createResult = (isSolutionFound:boolean,solution:string, error:any, statistics:any):BacktrackResult => {
  return {
    isSolutionFound,
    solution,
    error,
    statistics
  };
}

const noSolution = (ind: number): boolean => ind < 0;
const solutionFound = (length: number, ind: number): boolean => ind === length;

/**
 * 
 * @param board A sudoku board, empty, complete or partially filled
   The method uses backtrack algorithm to iterate through all the possible cell values (1-9). It returns with the first solution if there are multiple.
   1. get the list of empty cells
   2. get the next empty cell 
   3. find the next value for the cell and checks whether it is valid (check duplicates in row/col/block, <10)
   - if yes ->  continue with next cell
   - if no -> zero out cell and get back to previous cell
   
   Solution found if there is no empty cell left.
   There is no solution if first empty cell value is 9 and it is not valid.
   @returns [isSolutionFound: boolean, sudokuString:string]
 */

const solve = (board: Board): BacktrackResult => {
  //const executionStart = window.performance.now();

  // get empty cells
  const emptyCells: [string, number][] = [...board.empties().entries()];

  let ind: number = 0;
  let nbrOfIteration = 0;

  try {
    do {
      nbrOfIteration++;

      // get next cell
      let cell: [string, number] = emptyCells[ind];

      // get next value for cell
      const [isFound, value] = findNextValue(cell, board);

      /*
      console.log(
        "ITER: " + nbrOfIteration,
        "IND: " + ind,
        cell[0] + "->" + value
      );
      */

      if (isFound) {
        // update current cell
        cell[1] = value || 0;
        // goto next empty cell
        ind++;
      } else {
        // zero current cell
        cell[1] = 0;
        // back to previous cell
        ind--;
      }
    } while (!noSolution(ind) && !solutionFound(emptyCells.length, ind));

    //const executionEnd = window.performance.now();
    //const elapsedTime = `Execution time: ${executionEnd - executionStart} ms`;
    const statistics = {
      //elapsedTime,
      nbrOfIteration,
    };

    if (noSolution(ind)) {
      return createResult(false,"",null,statistics);
    }

    if (solutionFound(emptyCells.length, ind)) {
      return createResult(true, board.print(),null, statistics);
    }

    return createResult(false,"",null,statistics);
  } catch (err) {
    console.log("Error", err);
    return createResult(false, "", err, null);
  }
};

const api = {
  solve,
};
export default api;
