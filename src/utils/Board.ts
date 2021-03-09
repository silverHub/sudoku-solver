// data structure will stored in a Map
// keys: <row,col,block>    "111" to "999" (81 key)

const m: Map<string, number> = new Map();

export const getBlock = (i: number, j: number): number => {
  if (j - 1 < 3) {
    if (i - 1 < 3) return 1;
    if (i - 1 < 6) return 4;
    return 7;
  } else if (j - 1 < 6) {
    if (i - 1 < 3) return 2;
    if (i - 1 < 6) return 5;
    return 8;
  } else {
    if (i - 1 < 3) return 3;
    if (i - 1 < 6) return 6;
    return 9;
  }
};

const createKey = (row: number, col: number): string =>
  `${row}${col}${getBlock(row, col)}`;

const createEmpty = (): void => {
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      m.set(createKey(i, j), 0);
    }
  }
};

const create = (str: string): void => {
  if (str.length !== 81) {
    throw new Error("Invalid sudoku");
  }
  createEmpty();

  const keys = Array.from(m.keys());
  keys.forEach((key, ind) => {
    m.set(key, Number.parseInt(str.charAt(ind), 10));
  });
};

const log = () => {
  let i = 1;
  let s = "";
  for (let value of m.values()) {
    if (i > 9) {
      i = 1;
      s = s + "\n";
    }
    s = s + " " + value;
    i++;
  }
  return s;
};

const print = (): string => Array.from(m.values()).join("");

const row = (ind: number) =>
  new Map(
    Array.from(m.entries()).filter(
      ([key, value]) => key.charAt(0) === ind.toString() && value
    )
  );
const col = (ind: number) =>
  new Map(
    Array.from(m.entries()).filter(
      ([key, value]) => key.charAt(1) === ind.toString() && value
    )
  );
const block = (ind: number) =>
  new Map(
    Array.from(m.entries()).filter(
      ([key, value]) => key.charAt(2) === ind.toString() && value
    )
  );
const empties = () =>
  new Map(Array.from(m.entries()).filter(([, value]) => !value));

const get = (row: number, col: number): number | undefined => {
  return m.get(createKey(row, col));
};
const set = (row: number, col: number, value: number): void => {
  m.set(createKey(row, col), value);
};

const clear = () => {
  m.clear();
};


export default {
  create,
  createEmpty,
  print,
  log,
  clear,
  row,
  col,
  block,
  empties,
  get,
  set
};
