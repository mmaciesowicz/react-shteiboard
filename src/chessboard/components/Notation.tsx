import { COLUMNS } from "../consts";
import { useChessboard } from "../context/chessboard-context";

type NotationProps = {
  row: number;
  col: number;
};

export function Notation({ row, col }: NotationProps) {
  const {
    boardOrientation,
    boardWidth,
    customDarkSquareStyle,
    customLightSquareStyle,
    customNotationStyle,
  } = useChessboard();

  const whiteColor = customLightSquareStyle.backgroundColor;
  const blackColor = customDarkSquareStyle.backgroundColor;

  const isRow = col === 0;
  const isColumn = row === 9;
  const isBottomLeftSquare = isRow && isColumn;

  function getRow() {
    return boardOrientation === "white" ? 10 - row : row + 1;
  }

  function getColumn() {
    return boardOrientation === "black" ? COLUMNS[9 - col] : COLUMNS[col];
  }

  function renderBottomLeft() {
    return (
      <>
        <div
          style={{
            zIndex: 3,
            position: "absolute",
            ...{ color: blackColor },
            ...numericStyle(boardWidth, customNotationStyle),
          }}
        >
          {getRow()}
        </div>
        <div
          style={{
            zIndex: 3,
            position: "absolute",
            ...{ color: blackColor },
            ...alphaStyle(boardWidth, customNotationStyle),
          }}
        >
          {getColumn()}
        </div>
      </>
    );
  }

  function renderLetters() {
    return (
      <div
        style={{
          userSelect: "none",
          zIndex: 3,
          position: "absolute",
          ...{ color: col % 2 !== 0 ? whiteColor : blackColor },
          ...alphaStyle(boardWidth, customNotationStyle),
        }}
      >
        {getColumn()}
      </div>
    );
  }

  function renderNumbers() {
    return (
      <div
        style={{
          userSelect: "none",
          zIndex: 3,
          position: "absolute",
          ...(boardOrientation === "black"
            ? { color: row % 2 === 0 ? whiteColor : blackColor }
            : { color: row % 2 === 0 ? whiteColor : blackColor }),
          ...numericStyle(boardWidth, customNotationStyle),
        }}
      >
        {getRow()}
      </div>
    );
  }

  if (isBottomLeftSquare) {
    return renderBottomLeft();
  }

  if (isColumn) {
    return renderLetters();
  }

  if (isRow) {
    return renderNumbers();
  }

  return null;
}

const alphaStyle = (width: number, customNotationStyle?: Record<string, string | number>) => ({
  alignSelf: "flex-end",
  paddingLeft: width / 10 - width / 48,
  fontSize: width / 48,
  ...customNotationStyle
});

const numericStyle = (width: number, customNotationStyle?: Record<string, string | number>) => ({
  alignSelf: "flex-start",
  paddingRight: width / 10 - width / 48,
  fontSize: width / 48,
  ...customNotationStyle
});
