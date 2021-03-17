import Backtrack, {
  getIndex,
  isValid,
  isDistinct,
  findNextValue,
} from "./Backtrack";
import Board from "./Board";

const SOLVED =
  "971536842286974513354812679563421798497658321128793465732145986645289137819367254";

describe("Board", () => {
  beforeEach(() => {
    Board.createEmpty();
  });

  test("exposed", () => {
    expect(Backtrack.solve).toBeDefined();
  });

  test("getIndex", () => {
    expect(getIndex("111")).toEqual({ row: 1, col: 1, block: 1 });
    expect(getIndex("123")).toEqual({ row: 1, col: 2, block: 3 });
    expect(getIndex("999")).toEqual({ row: 9, col: 9, block: 9 });
  });

  test("hasDistinctValues", () => {
    expect(
      isDistinct(
        new Map([
          ["1", 1],
          ["2", 2],
        ])
      )
    ).toBe(true);
    expect(
      isDistinct(
        new Map([
          ["1", 1],
          ["2", 1],
        ])
      )
    ).toBe(false);
  });

  describe("isValid", () => {
    test("empty board is valid", () => {
      expect(isValid({ row: 1, col: 1, block: 1 }, Board)).toBe(true);
    });

    test("board is valid", () => {
      Board.set(1, 1, 1);
      expect(isValid({ row: 1, col: 1, block: 1 }, Board)).toBe(true);
      Board.set(1, 2, 1);
      expect(isValid({ row: 1, col: 2, block: 1 }, Board)).toBe(false);
      Board.set(1, 2, 2);
      expect(isValid({ row: 1, col: 2, block: 1 }, Board)).toBe(true);
    });
  });

  describe("findNextValue", () => {
    test("find next value for the first cell in empty board", () => {
      expect(findNextValue(["111", 0], Board)).toEqual([true, 1]);
    });

    test("find next value for the second cell in empty board", () => {
      Board.set(1, 1, 1);
      expect(findNextValue(["121", 0], Board)).toEqual([true, 2]);
    });

    test("find next value for the last cell", () => {
      Board.create(SOLVED);
      Board.set(1, 1, 0);
      expect(findNextValue(["111", 0], Board)).toEqual([true, 9]);
      Board.set(1, 1, 9);
      Board.set(9, 9, 0);
      expect(findNextValue(["999", 0], Board)).toEqual([true, 4]);
      Board.set(9, 9, 5);
      expect(findNextValue(["999", 5], Board)).toEqual([false, null]);
    });
  });

  describe("solve", () => {
    test("remove one cell from solved board", () => {
      Board.create(SOLVED);
      Board.set(1, 1, 0);
      expect(Backtrack.solve(Board)).toEqual({
        error: null,
        isSolutionFound: true,
        solution: SOLVED,
        statistics: expect.anything(),
      });
    });

    test("remove 2 cells from solved board", () => {
      Board.create(SOLVED);
      Board.set(1, 1, 0);
      Board.set(9, 9, 0);
      expect(Backtrack.solve(Board)).toEqual({
        error: null,
        isSolutionFound: true,
        solution: SOLVED,
        statistics: expect.anything(),
      });
    });

    test("remove random cells from solved board", () => {
      Board.create(SOLVED);
      Board.set(1, 1, 0);
      Board.set(9, 9, 0);
      Board.set(4, 4, 0);
      Board.set(5, 5, 0);
      expect(Backtrack.solve(Board)).toEqual({
        error: null,
        isSolutionFound: true,
        solution: SOLVED,
        statistics: expect.anything(),
      });
    });
    test("solve empty board", () => {
      expect(Backtrack.solve(Board)).toEqual({
        error: null,
        isSolutionFound: true,
        solution:
          "123456789456789123789123456214365897365897214897214365531642978642978531978531642",
        statistics: expect.anything(),
      });
    });
  });
});
