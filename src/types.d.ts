type BacktrackResult = {
  isSolutionFound: boolean,
  solution: string,
  error: any,
  statistics: {nbrOfIteration: number, elapsedTime?:number}
};

type Board = {
  create: (str: string) => void;
  createEmpty: () => void;
  print: () => string;
  log: () => string;
  clear: () => void;
  row: (ind: number) => Map<string, number>;
  col: (ind: number) => Map<string, number>;
  block: (ind: number) => Map<string, number>;
  empties: () => Map<string, number>;
  get: (row: number, col: number) => number | undefined;
  set: (row: number, col: number, value: number) => void;
};

type Backtrack = {
  solve: (b: Board) => BacktrackResult;
};
