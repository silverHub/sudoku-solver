import Board, { getBlock } from "./Board";

const SOLVED =
  "971536842286974513354812679563421798497658321128793465732145986645289137819367254";

describe("Board", () => {
  beforeEach(() => {
    Board.clear();
  });

  test("usage", () => {
    expect(Board.get(1, 1)).not.toBeDefined();

    Board.createEmpty();
    expect(Board.get(1, 1)).toBe(0);

    Board.set(1, 1, 9);
    expect(Board.get(1, 1)).toBe(9);

    expect(Board.print()).toBe(
      "900000000000000000000000000000000000000000000000000000000000000000000000000000000"
    );
  });

  test(".getBlock", () => {
    expect(getBlock(1, 1)).toBe(1);
    expect(getBlock(2, 2)).toBe(1);
    expect(getBlock(3, 3)).toBe(1);
    expect(getBlock(1, 5)).toBe(2);
    expect(getBlock(2, 5)).toBe(2);
    expect(getBlock(3, 5)).toBe(2);
    expect(getBlock(1, 9)).toBe(3);
    expect(getBlock(2, 9)).toBe(3);
    expect(getBlock(3, 9)).toBe(3);
    expect(getBlock(5, 2)).toBe(4);
    expect(getBlock(6, 6)).toBe(5);
    expect(getBlock(4, 7)).toBe(6);
    expect(getBlock(8, 3)).toBe(7);
    expect(getBlock(9, 5)).toBe(8);
    expect(getBlock(7, 7)).toBe(9);
  });

  describe(".createEmpty", () => {
    test("exposed", () => {
      expect(Board.createEmpty).toBeDefined();
    });
    test("creation of empty board", () => {
      Board.createEmpty();
      expect(Board.print()).toBe(
        "000000000000000000000000000000000000000000000000000000000000000000000000000000000"
      );
    });
  });
  describe(".create", () => {
    test("exposed", () => {
      expect(Board.create).toBeDefined();
    });

    test("invalid string passed", () => {
      expect(() => Board.create("0000")).toThrow(Error);
    });

    test("fill solved board", () => {
      Board.create(SOLVED);
      expect(Board.print()).toBe(SOLVED);
    });

    test("test creation from string", () => {
      Board.create(
        "000600080961058000058090006000030608030007052800062731100029003086040279500000000"
      );
      expect(Board.print()).toBe(
        "000600080961058000058090006000030608030007052800062731100029003086040279500000000"
      );
    });
  });
  describe(".row", () => {
    test("exposed", () => {
      expect(Board.row).toBeDefined();
    });

    test("get rows", () => {
      Board.create(
        "123000000000456000000789000000000000000000000000000000000000000000000000000000000"
      );
      expect(Array.from(Board.row(1).entries())).toEqual([
        ["111", 1],
        ["121", 2],
        ["131", 3]
      ]);
    });
  });

  describe(".col", () => {
    test("exposed", () => {
      expect(Board.col).toBeDefined();
    });

    test("get cols", () => {
      Board.create(
        "123000000456000000789000000000000000000000000000000000000000000000000000000000000"
      );
      expect(Array.from(Board.col(2).entries())).toEqual([
        ["121", 2],
        ["221", 5],
        ["321", 8]
      ]);
    });
  });

  describe(".block", () => {
    test("exposed", () => {
      expect(Board.block).toBeDefined();
    });

    test("get block", () => {
      Board.create(
        "123000000456000000789000000000000000000000000000000000000000000000000000000000000"
      );
      expect(Array.from(Board.block(1).entries())).toEqual([
        ["111", 1],
        ["121", 2],
        ["131", 3],
        ["211", 4],
        ["221", 5],
        ["231", 6],
        ["311", 7],
        ["321", 8],
        ["331", 9]
      ]);
    });
  });

  describe(".empties", () => {
    test("exposed", () => {
      expect(Board.empties).toBeDefined();
    });

    test("get empties of a solved board", () => {
      Board.create(
        "123456789456789123789123456123456789456789123789123456123456789456789123789123456"
      );
      expect(Array.from(Board.empties().entries())).toEqual([]);
    });

    test("get empties of a solved board", () => {
      Board.create(
        "123456789456789123789123456123456789456789123789123456123456789456789123789123456"
      );
      Board.set(1, 1, 0);
      expect([...Board.empties().entries()]).toEqual([["111", 0]]);
    });

    test("get empties of unsolved board", () => {
      Board.create(
        "023456789456789123789123456123456789456789123789123456123456789456789123789123450"
      );
      expect(Array.from(Board.empties().entries())).toEqual([
        ["111", 0],
        ["999", 0]
      ]);
    });
  });
});
