import { useChessboard } from "../context/chessboard-context";
import { getRelativeCoords } from "../functions";
import { PromotionPieceOption } from "../types";
import { PromotionOption } from "./PromotionOption";

export function PromotionDialog() {
  let {
    boardOrientation,
    boardWidth,
    promotionDialogVariant,
    promoteToSquare,
  } = useChessboard();

  const promotePieceColor = promoteToSquare?.slice(1,3) === "1" ? "b" : "w";
  const promotionOptions: PromotionPieceOption[] = [
    `${promotePieceColor ?? "w"}G`,
    `${promotePieceColor ?? "w"}R`,
    `${promotePieceColor ?? "w"}N`,
    `${promotePieceColor ?? "w"}B`,
    `${promotePieceColor ?? "w"}M`,
  ];

  let dialogCoords = getRelativeCoords(
    boardOrientation,
    boardWidth,
    promoteToSquare || "a10"
  );

  let defaultTransform = `translate(${-boardWidth / 10}px, 0)`; // if (boardOrientation === "white" && promotePieceColor === "w" || boardOrientation === "black" && promotePieceColor === "b")
  
  // top left corner
  if ((boardOrientation === "white" && promoteToSquare === "a10") || (boardOrientation === "black" && promoteToSquare === "j1")) {
    defaultTransform = `translate(${-boardWidth / 20}px, ${-boardWidth/100}px)`;
  }
  // top right corner
  else if ((boardOrientation === "white" && promoteToSquare === "j10") || (boardOrientation === "black" && promoteToSquare === "a1")) {
    defaultTransform = `translate(${-1.5*boardWidth / 10}px, ${-boardWidth/100}px)`;
  }
   // bottom left corner (white)
  else if (boardOrientation === "white" && promoteToSquare === "a1") {
    defaultTransform = `translate(${-boardWidth / 20}px, ${-3*boardWidth/10}px)`;
  }
  // bottom left corner (black)
  else if (boardOrientation === "black" && promoteToSquare === "j10") {
    defaultTransform = `translate(${-boardWidth / 20}px, ${-boardWidth/100}px)`;
  }
  // bottom right corner (white)
  else if ((boardOrientation === "white" && promoteToSquare === "j1")) {
    defaultTransform = `translate(${-1.5*boardWidth / 10}px, ${-3*boardWidth/10}px)`;
  }
  // bottom right corner (black)
  else if (boardOrientation === "black" && promoteToSquare === "a10") {
    defaultTransform = `translate(${-1.5*boardWidth / 10}px, ${-boardWidth/100}px)`;
  }
  else if (boardOrientation === "white" && promotePieceColor === "b") {
    defaultTransform = `translate(${-boardWidth / 10}px, ${-3*boardWidth / 10}px)`;
  }

  const dialogStyles = {
    default: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      transform: defaultTransform,
      // transform: `translate(${-boardWidth / 10}px, 0)`, 
      // transform: `translate(${-boardWidth / 10}px, ${-boardWidth / 10}px)`,
    },
    vertical: {
      transform: `translate(${-boardWidth / 16}px, ${-boardWidth / 16}px)`,
    },
    modal: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transform: `translate(0px, ${(3 * boardWidth) / 10}px)`,
      width: "100%",
      height: `${boardWidth / 4}px`,
      top: 0,
      backgroundColor: "white",
      left: 0,
    },
  };

  dialogCoords.y = ((boardOrientation === "white" && promotePieceColor === "w") || (boardOrientation === "black" && promotePieceColor === "b")) ? boardWidth / 20 : dialogCoords.y;
  if (boardOrientation === "black" && promotePieceColor === "w") {
    dialogCoords.y = 13*boardWidth / 20;
  }
  return (
    <div
      style={{
        position: "absolute",
        top: `${dialogCoords?.y}px`,
        left: `${dialogCoords?.x}px`,
        zIndex: 1000,
        ...dialogStyles[promotionDialogVariant],
      }}
      title="Choose promotion piece"
    >
      {promotionOptions.map((option) => (
        <PromotionOption key={option} option={option} />
      ))}
    </div>
  );
}
