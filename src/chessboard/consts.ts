import { BoardPosition } from "./types";

export const COLUMNS = "abcdefghij".split("");

export const START_POSITION_OBJECT: BoardPosition = {
  a10: "bR",
  e10: "wK",
  f10: "bQ",
  j10: "bR",
  c9: "bM",
  d9: "bB",
  e9: "bN",
  f9: "bN",
  g9: "bB",
  h9: "bM",
  a8: "bP",
  b8: "bP",
  c8: "bP",
  d8: "bP",
  e8: "bP",
  f8: "bP",
  g8: "bP",
  h8: "bP",
  i8: "bP",
  j8: "bP",
  a3: "wP",
  b3: "wP",
  c3: "wP",
  d3: "wP",
  e3: "wP",
  f3: "wP",
  g3: "wP",
  h3: "wP",
  i3: "wP",
  j3: "wP",
  c2: "wM",
  d2: "wB",
  e2: "wN",
  f2: "wN",
  g2: "wB",
  h2: "wM",
  a1: "wR",
  e1: "bK",
  f1: "wQ",
  j1: "wR",

};

export const WHITE_COLUMN_VALUES: { [col in string]: number } = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
};
export const BLACK_COLUMN_VALUES: { [col in string]: number } = {
  a: 9,
  b: 8,
  c: 7,
  d: 6,
  e: 5,
  f: 4,
  g: 3,
  h: 2,
  i: 1,
  j: 0,
};

export const WHITE_ROWS = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
export const BLACK_ROWS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
