import { ReactNode } from "react";
// https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces
// By en:User:Cburnett - Own work
// This W3C - unspecified vector image was created with Inkscape., CC BY - SA 3.0, https://commons.wikimedia.org/w/index.php?curid=1499810

// or we can use react SVGR https://react-svgr.com/playground/ to convert

export const defaultPieces: Record<string, ReactNode> = {
  wP: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="45"
      height="45"
    >
      <path
        d="m 22.5,9 c -2.21,0 -4,1.79 -4,4 0,0.89 0.29,1.71 0.78,2.38 C 17.33,16.5 16,18.59 16,21 c 0,2.03 0.94,3.84 2.41,5.03 C 15.41,27.09 11,31.58 11,39.5 H 34 C 34,31.58 29.59,27.09 26.59,26.03 28.06,24.84 29,23.03 29,21 29,18.59 27.67,16.5 25.72,15.38 26.21,14.71 26.5,13.89 26.5,13 c 0,-2.21 -1.79,-4 -4,-4 z"
        style={{
          opacity: "1",
          fill: "#ffffff",
          fillOpacity: "1",
          fillRule: "nonzero",
          stroke: "#000000",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "miter",
          strokeMiterlimit: "4",
          strokeDasharray: "none",
          strokeOpacity: "1",
        }}
      />
    </svg>
  ),
  wM: (
    <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} x="17.5%" y="14%">
    <defs>
      <style>
        {
          ".wM-1,.wM-4{fill:#fff}.wM-1,.wM-2,.wM-4{stroke:#000;stroke-linecap:round;stroke-width:1.5px;stroke-linejoin:round}.wM-4{fill-rule:evenodd}"
        }
      </style>
    </defs>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          d="M27.08 32.82a79 79 0 0 0-12.3-.89 79 79 0 0 0-12.3.89A11.1 11.1 0 0 1 2.45 21c.44-.65 3.57 3.47 5.45 3.58L6.19 7.11a1.9 1.9 0 0 0 1-.31l4.34 5.12L14.78 5l3.25 7 4.34-5.2a1.9 1.9 0 0 0 1 .3l-1.71 17.45c1.88-.11 5-4.23 5.45-3.58a11.1 11.1 0 0 1-.03 11.85Z"
          className="wM-1"
        />
        <path
          d="M6.19 7.11h0v-.35a2 2 0 0 0 .71-.33l.32.38a1.9 1.9 0 0 1-1.03.3Z"
          className="wM-2"
        />
        <path
          d="M12.28 16.78h5"
          style={{
            fill: "none",
            stroke: "#000",
            strokeLinecap: "round",
            strokeWidth: "1.5px",
          }}
        />
        <path
          d="M8.15 5.13a2 2 0 0 1-1 1.67 1.9 1.9 0 0 1-1 .31h-.02a2 2 0 1 1 2-2Z"
          className="wM-4"
        />
        <ellipse cx={14.78} cy={2.74} className="wM-1" rx={2} ry={1.99} />
        <path
          d="M23.4 6.75v.35a1.9 1.9 0 0 1-1-.3l.32-.38a2 2 0 0 0 .68.33ZM12.27 16.78h5"
          className="wM-2"
        />
        <path
          d="M25.41 5.1a2 2 0 0 1-2 2h-.05a1.9 1.9 0 0 1-1-.3 2 2 0 0 1-1-1.67 2 2 0 0 1 4 0Z"
          className="wM-4"
        />
        <path
          d="M4.06 28.45a73.87 73.87 0 0 1 21 0M14.77 29.38v-16.8"
          className="wM-2"
        />
      </g>
    </g>
  </svg>
  ),
  wG: (
    <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} x="12.5%" y="14%">
    <defs>
      <style>{".cls-1{fill:#fff}"}</style>
    </defs>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          d="m24.86 7.89-.55 2c-.2-.24-.43-.49-.66-.73l-.34-.45 1.28-1a3.15 3.15 0 0 0 .27.18ZM28.78 14.4l-2.15 1.84a8.57 8.57 0 0 0-.12-1.81l2.17-.25a2.14 2.14 0 0 0 .1.22ZM27.21 5.85a1.07 1.07 0 0 1-1.21.87h-.14a1 1 0 0 1-.61-.43 1.05 1.05 0 0 1-.15-.75 1.08 1.08 0 0 1 .43-.68 1.12 1.12 0 0 1 .61-.19h.19a1.05 1.05 0 0 1 .88 1.18ZM32.16 13.48a1.1 1.1 0 0 1-.44.67 1.13 1.13 0 0 1-.8.18 1.07 1.07 0 0 1-.6-.36 1.1 1.1 0 0 1-.28-.71.66.66 0 0 1 0-.14 1.08 1.08 0 0 1 1.06-.87h.18a1.07 1.07 0 0 1 .88 1.23ZM18.64 3.29a1.78 1.78 0 0 1-1.77 1.77 1.77 1.77 0 1 1 1.79-1.77ZM10.41 8.69c-.13.15-.24.3-.35.45s-.45.49-.66.73l-.55-2 .28-.19ZM7.21 14.43a8 8 0 0 0-.12 1.81L4.93 14.4a2.14 2.14 0 0 0 .1-.22ZM8.6 5.49a1.05 1.05 0 0 1-.15.75 1 1 0 0 1-.62.43h-.14a1.08 1.08 0 0 1-1.19-.82 1.07 1.07 0 0 1 .87-1.21h.2a1.09 1.09 0 0 1 .6.19 1 1 0 0 1 .43.66ZM3.67 13.26a1 1 0 0 1-.28.71 1.07 1.07 0 0 1-.6.36 1.13 1.13 0 0 1-.8-.18 1 1 0 0 1-.43-.67 1.07 1.07 0 0 1 .86-1.23h.18a1.06 1.06 0 0 1 1.06.87.66.66 0 0 1 .01.14Z"
          className="cls-1"
        />
        <path d="M31.56 10.75a2.62 2.62 0 0 0-3 1.92l-2.48.33a3.82 3.82 0 0 0-.13-.36 11.33 11.33 0 0 0-.5-1.06l.91-3.31a2.57 2.57 0 1 0-1.7-4.65 2.54 2.54 0 0 0-1.07 1.65 2.65 2.65 0 0 0 .1 1.25l-1.64 1.21a7.11 7.11 0 0 0-.62-.46c-.18-.13-.33-.23-.5-.33s-.55-.34-.85-.5a7.49 7.49 0 0 0-.69-.36c-.16-.09-.32-.15-.47-.23a3.25 3.25 0 0 0 1.26-2.56 3.33 3.33 0 0 0-6.65 0 3.22 3.22 0 0 0 1.26 2.56c-.15.08-.31.14-.47.23s-.47.23-.7.36-.57.33-.84.5-.32.2-.5.33a7.11 7.11 0 0 0-.62.46L10 6.47a2.65 2.65 0 0 0 .1-1.25 2.54 2.54 0 0 0-1.05-1.65 2.58 2.58 0 1 0-1.7 4.65l.91 3.31a11.33 11.33 0 0 0-.5 1.06 3.82 3.82 0 0 0-.13.36l-2.52-.28a2.62 2.62 0 0 0-3-1.92 2.59 2.59 0 0 0-2.11 3 2.49 2.49 0 0 0 1.07 1.66 2.48 2.48 0 0 0 1.48.47 2.32 2.32 0 0 0 .46 0 2.35 2.35 0 0 0 .84-.31l3.72 3.18a2.25 2.25 0 0 0 .08.24 6.06 6.06 0 0 0 1.16 1.75A2 2 0 0 1 9 21a1.14 1.14 0 0 0-.29 0A4.38 4.38 0 0 0 4 23a6.87 6.87 0 0 0-.65 1.23c-.1.35-.19.63-.25.92a4.4 4.4 0 0 0-.12.65v.31a6.86 6.86 0 0 0 1 4 5.53 5.53 0 0 0 .79 1 18 18 0 0 0 4.06 3.18.79.79 0 0 0 .76 0 15.52 15.52 0 0 1 14.47 0 .79.79 0 0 0 .76 0 18 18 0 0 0 4.06-3.18 5.53 5.53 0 0 0 .79-1 6.86 6.86 0 0 0 1-4v-.31a4.4 4.4 0 0 0-.12-.65c-.06-.29-.15-.57-.25-.92a6.87 6.87 0 0 0-.63-1.23A4.38 4.38 0 0 0 25 21a1.14 1.14 0 0 0-.24.05h-.05a2 2 0 0 1 .19-.33 6.06 6.06 0 0 0 1.1-1.79 2.25 2.25 0 0 0 .08-.24l3.72-3.18a2.35 2.35 0 0 0 .84.31 2.32 2.32 0 0 0 .46 0 2.61 2.61 0 0 0 2.55-2.13 2.59 2.59 0 0 0-2.09-2.94ZM3.39 14a1 1 0 0 1-.6.36 1.17 1.17 0 0 1-.8-.17 1.09 1.09 0 0 1-.43-.68 1.05 1.05 0 0 1 .86-1.23h.18a1.07 1.07 0 0 1 1.06.87.66.66 0 0 1 0 .14 1 1 0 0 1-.27.71Zm3.69 2.27L4.93 14.4a2 2 0 0 0 .1-.21l2.18.24a8 8 0 0 0-.13 1.81Zm17.51-8.56a1.81 1.81 0 0 0 .27.18l-.55 2-.66-.73c-.11-.15-.22-.3-.35-.45Zm-4.25 1.63-1.23 4.57c-.72 2.66-1.43 5.31-2.11 8a.64.64 0 0 1-.15.28 2 2 0 0 1-.44.35l-.25.18c-.18.14-.2.15-.44 0a16.47 16.47 0 0 1-3.12-2.55 34 34 0 0 1 4.25-7 32.13 32.13 0 0 1 3.49-3.83Zm-3.49-7.82a1.77 1.77 0 1 1 0 3.54 1.77 1.77 0 1 1 0-3.54ZM9.12 7.71l1.29 1c-.13.15-.24.3-.35.45l-.66.73-.55-2a1.81 1.81 0 0 0 .27-.18Zm-.67-1.47a1 1 0 0 1-.62.43h-.14a1.05 1.05 0 0 1-.31-2.08h.2a1.09 1.09 0 0 1 .6.19 1 1 0 0 1 .43.68 1.05 1.05 0 0 1-.16.78Zm16.17 12.07a4.75 4.75 0 0 1-.93 1.37c-.21.28-.89 1.22-.48 2.06a1.6 1.6 0 0 0 1.58.8h.2l.26-.07c1.63-.44 2.9.68 3.49 2.09a5.41 5.41 0 0 1-.36 4.83 3.5 3.5 0 0 1-.58.75 16.46 16.46 0 0 1-3.35 2.71 17.22 17.22 0 0 0-6.86-1.72c-.07-.86-.15-2.25.3-2.57a13.39 13.39 0 0 1 2.05-1.06c.44-.2.86-.39 1.23-.59a17.89 17.89 0 0 0 3.51-2.17.75.75 0 0 0 .08-1.07.78.78 0 0 0-1.09-.08 17 17 0 0 1-3.22 2c-.33.18-.73.36-1.14.54A14.83 14.83 0 0 0 17 27.31a1.79 1.79 0 0 1-.14.13l-.13-.13a14.83 14.83 0 0 0-2.32-1.22c-.41-.18-.81-.36-1.14-.54a17 17 0 0 1-3.22-2 .78.78 0 0 0-1.05.1.75.75 0 0 0 0 1.07 17.89 17.89 0 0 0 3.51 2.17c.37.2.79.39 1.23.59a13.39 13.39 0 0 1 2.05 1.06c.45.32.37 1.71.3 2.57a20.66 20.66 0 0 0-6.75 1.63.54.54 0 0 1-.22 0 .42.42 0 0 1-.12-.05C6.48 31 3.89 28.62 4.68 25.3c.3-1.24 1.24-2.71 2.64-2.85 1-.11 2.6.53 3.18-.71.41-.84-.27-1.78-.48-2.06a4.75 4.75 0 0 1-.93-1.37 6.17 6.17 0 0 1-.36-3.69 9.3 9.3 0 0 1 .44-1.46 10.18 10.18 0 0 1 2.29-3.28 13.87 13.87 0 0 1 1.71-1.38l.41-.27.8-.47c.21-.11.41-.23.63-.33.59-.29 1.22-.56 1.84-.8.63.24 1.26.51 1.85.8.22.1.42.22.63.33l.3.18h-.07a33.6 33.6 0 0 0-2.71 2.76 35.37 35.37 0 0 0-5.69 8.84 1.31 1.31 0 0 0 .26 1.52A17.52 17.52 0 0 0 14.87 24a2 2 0 0 0 1.09.37 1.76 1.76 0 0 0 .89-.26 1.2 1.2 0 0 0 .24-.15l.22-.15a2.6 2.6 0 0 0 1.18-1.5c.68-2.67 1.39-5.32 2.11-8l1.28-4.76.37.34a10 10 0 0 1 2.28 3.28 8.34 8.34 0 0 1 .47 1.45 6.17 6.17 0 0 1-.38 3.69Zm.64-12.07a1.05 1.05 0 0 1-.15-.75 1 1 0 0 1 .43-.68 1.09 1.09 0 0 1 .6-.19h.2a1.05 1.05 0 0 1-.34 2.1h-.14a1 1 0 0 1-.62-.43Zm1.37 10a8 8 0 0 0-.13-1.81l2.18-.24a2 2 0 0 0 .1.21Zm5.09-2.08a1.17 1.17 0 0 1-.8.17 1 1 0 0 1-.6-.36 1 1 0 0 1-.28-.71.66.66 0 0 1 0-.14 1.07 1.07 0 0 1 1.06-.87h.18a1.05 1.05 0 0 1 .86 1.23 1.09 1.09 0 0 1-.42.68Z" />
        <path
          d="M28.38 29.37a3.5 3.5 0 0 1-.58.75 16.46 16.46 0 0 1-3.35 2.71 17.22 17.22 0 0 0-6.86-1.72c-.07-.86-.15-2.25.3-2.57a13.39 13.39 0 0 1 2.05-1.06c.44-.2.86-.39 1.23-.59a17.89 17.89 0 0 0 3.51-2.17.75.75 0 0 0 .08-1.07.78.78 0 0 0-1.09-.08 17 17 0 0 1-3.22 2c-.33.18-.73.36-1.14.54a14.83 14.83 0 0 0-2.31 1.2 1.79 1.79 0 0 1-.14.13l-.13-.13a14.83 14.83 0 0 0-2.32-1.22c-.41-.18-.81-.36-1.14-.54a17 17 0 0 1-3.22-2 .78.78 0 0 0-1.05.1.75.75 0 0 0 0 1.07 17.89 17.89 0 0 0 3.51 2.17c.37.2.79.39 1.23.59a13.39 13.39 0 0 1 2.05 1.06c.45.32.37 1.71.3 2.57a20.66 20.66 0 0 0-6.75 1.63.54.54 0 0 1-.22 0 .42.42 0 0 1-.12-.05C6.48 31 3.89 28.62 4.68 25.3c.3-1.24 1.24-2.71 2.64-2.85 1-.11 2.6.53 3.18-.71.41-.84-.27-1.78-.48-2.06a4.75 4.75 0 0 1-.93-1.37 6.17 6.17 0 0 1-.36-3.69 9.3 9.3 0 0 1 .44-1.46 10.18 10.18 0 0 1 2.29-3.28 13.87 13.87 0 0 1 1.71-1.38l.41-.27.8-.47c.21-.11.41-.23.63-.33.59-.29 1.22-.56 1.84-.8.63.24 1.26.51 1.85.8.22.1.42.22.63.33l.3.18h-.07a33.6 33.6 0 0 0-2.71 2.76 35.37 35.37 0 0 0-5.69 8.84 1.31 1.31 0 0 0 .26 1.52A17.52 17.52 0 0 0 14.87 24a2 2 0 0 0 1.09.37 1.76 1.76 0 0 0 .89-.26 1.2 1.2 0 0 0 .24-.15l.22-.15a2.6 2.6 0 0 0 1.18-1.5c.68-2.67 1.39-5.32 2.11-8l1.28-4.76.37.34a10 10 0 0 1 2.28 3.28 8.34 8.34 0 0 1 .47 1.45 6.17 6.17 0 0 1-.36 3.69 4.75 4.75 0 0 1-.93 1.37c-.21.28-.89 1.22-.48 2.06a1.6 1.6 0 0 0 1.58.8h.2l.26-.07c1.63-.44 2.9.68 3.49 2.09a5.41 5.41 0 0 1-.38 4.81Z"
          className="cls-1"
        />
        <path
          d="m20.34 9.33-1.23 4.58c-.72 2.65-1.43 5.31-2.11 8a.63.63 0 0 1-.14.27 2.65 2.65 0 0 1-.44.36l-.26.18c-.17.14-.2.15-.44 0a16.47 16.47 0 0 1-3.12-2.55 34.07 34.07 0 0 1 4.26-7 31.3 31.3 0 0 1 3.48-3.84Z"
          className="cls-1"
        />
      </g>
    </g>
  </svg>
  ),
  wR: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="45"
      height="45"
    >
      <g
        style={{
          opacity: "1",
          fill: "#ffffff",
          fillOpacity: "1",
          fillRule: "evenodd",
          stroke: "#000000",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "4",
          strokeDasharray: "none",
          strokeOpacity: "1",
        }}
      >
        <path
          d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z "
          style={{ strokeLinecap: "butt" }}
        />
        <path
          d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z "
          style={{ strokeLinecap: "butt" }}
        />
        <path
          d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14"
          style={{ strokeLinecap: "butt" }}
        />
        <path d="M 34,14 L 31,17 L 14,17 L 11,14" />
        <path
          d="M 31,17 L 31,29.5 L 14,29.5 L 14,17"
          style={{ strokeLinecap: "butt", strokeLinejoin: "miter" }}
        />
        <path d="M 31,29.5 L 32.5,32 L 12.5,32 L 14,29.5" />
        <path
          d="M 11,14 L 34,14"
          style={{ fill: "none", stroke: "#000000", strokeLinejoin: "miter" }}
        />
      </g>
    </svg>
  ),
  wN: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="45"
      height="45"
    >
      <g
        style={{
          opacity: "1",
          fill: "none",
          fillOpacity: "1",
          fillRule: "evenodd",
          stroke: "#000000",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "4",
          strokeDasharray: "none",
          strokeOpacity: "1",
        }}
      >
        <path
          d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18"
          style={{ fill: "#ffffff", stroke: "#000000" }}
        />
        <path
          d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10"
          style={{ fill: "#ffffff", stroke: "#000000" }}
        />
        <path
          d="M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z"
          style={{ fill: "#000000", stroke: "#000000" }}
        />
        <path
          d="M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z"
          transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)"
          style={{ fill: "#000000", stroke: "#000000" }}
        />
      </g>
    </svg>
  ),
  wB: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="45"
      height="45"
    >
      <g
        style={{
          opacity: "1",
          fill: "none",
          fillRule: "evenodd",
          fillOpacity: "1",
          stroke: "#000000",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "4",
          strokeDasharray: "none",
          strokeOpacity: "1",
        }}
      >
        <g
          style={{ fill: "#ffffff", stroke: "#000000", strokeLinecap: "butt" }}
        >
          <path d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.65,38.99 6.68,38.97 6,38 C 7.35,36.54 9,36 9,36 z" />
          <path d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z" />
          <path d="M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z" />
        </g>
        <path
          d="M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18"
          style={{ fill: "none", stroke: "#000000", strokeLinejoin: "miter" }}
        />
      </g>
    </svg>
  ),
  wQ: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="45"
      height="45"
    >
      <g
        style={{
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: "1.5",
          strokeLinejoin: "round",
        }}
      >
        <path d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z" />
        <path d="M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 11,36 11,36 C 9.5,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z" />
        <path d="M 11.5,30 C 15,29 30,29 33.5,30" style={{ fill: "none" }} />
        <path
          d="M 12,33.5 C 18,32.5 27,32.5 33,33.5"
          style={{ fill: "none" }}
        />
        <circle cx="6" cy="12" r="2" />
        <circle cx="14" cy="9" r="2" />
        <circle cx="22.5" cy="8" r="2" />
        <circle cx="31" cy="9" r="2" />
        <circle cx="39" cy="12" r="2" />
      </g>
    </svg>
  ),
  wK: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="45"
      height="45"
    >
      <g
        style={{
          fill: "none",
          fillOpacity: "1",
          fillRule: "evenodd",
          stroke: "#000000",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "4",
          strokeDasharray: "none",
          strokeOpacity: "1",
        }}
      >
        <path
          d="M 22.5,11.63 L 22.5,6"
          style={{ fill: "none", stroke: "#000000", strokeLinejoin: "miter" }}
        />
        <path
          d="M 20,8 L 25,8"
          style={{ fill: "none", stroke: "#000000", strokeLinejoin: "miter" }}
        />
        <path
          d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25"
          style={{
            fill: "#ffffff",
            stroke: "#000000",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
          }}
        />
        <path
          d="M 12.5,37 C 18,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 20,16 10.5,13 6.5,19.5 C 3.5,25.5 12.5,30 12.5,30 L 12.5,37"
          style={{ fill: "#ffffff", stroke: "#000000" }}
        />
        <path
          d="M 12.5,30 C 18,27 27,27 32.5,30"
          style={{ fill: "none", stroke: "#000000" }}
        />
        <path
          d="M 12.5,33.5 C 18,30.5 27,30.5 32.5,33.5"
          style={{ fill: "none", stroke: "#000000" }}
        />
        <path
          d="M 12.5,37 C 18,34 27,34 32.5,37"
          style={{ fill: "none", stroke: "#000000" }}
        />
      </g>
    </svg>
  ),
  bP: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="45"
      height="45"
    >
      <path
        d="m 22.5,9 c -2.21,0 -4,1.79 -4,4 0,0.89 0.29,1.71 0.78,2.38 C 17.33,16.5 16,18.59 16,21 c 0,2.03 0.94,3.84 2.41,5.03 C 15.41,27.09 11,31.58 11,39.5 H 34 C 34,31.58 29.59,27.09 26.59,26.03 28.06,24.84 29,23.03 29,21 29,18.59 27.67,16.5 25.72,15.38 26.21,14.71 26.5,13.89 26.5,13 c 0,-2.21 -1.79,-4 -4,-4 z"
        style={{
          opacity: "1",
          fill: "#000000",
          fillOpacity: "1",
          fillRule: "nonzero",
          stroke: "#000000",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "miter",
          strokeMiterlimit: "4",
          strokeDasharray: "none",
          strokeOpacity: "1",
        }}
      />
    </svg>
  ),
  bM: (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={45}
    x="17.5%"
    y="14%"
  >
    <defs>
      <style>
        {
          ".bM-1,.bM-3{stroke:#000}.bM-1,.bM-3,.bM-4{stroke-linecap:round;stroke-width:1.5px;stroke-linejoin:round}.bM-3{fill-rule:evenodd}.bM-4{fill:#fff;stroke:#fff}"
        }
      </style>
    </defs>
    <g id="bM-1" data-name="bM-1">
      <g id="bM-Layer_1-2" data-name="bM-Layer 1">
        <path
          d="M27.08 32.82a79 79 0 0 0-12.3-.89 79 79 0 0 0-12.3.89A11.1 11.1 0 0 1 2.45 21c.44-.65 3.57 3.47 5.45 3.58L6.19 7.11a1.9 1.9 0 0 0 1-.31l4.34 5.12L14.78 5l3.25 7 4.34-5.2a1.9 1.9 0 0 0 1 .3l-1.71 17.45c1.88-.11 5-4.23 5.45-3.58a11.1 11.1 0 0 1-.03 11.85Z"
          className="bM-1"
        />
        <path
          d="M6.19 7.11h0v-.35a2 2 0 0 0 .71-.33l.32.38a1.9 1.9 0 0 1-1.03.3Z"
          className="bM-1"
        />
        <path
          d="M12.28 16.78h5"
          style={{
            fill: "none",
            strokeLinecap: "round",
            strokeWidth: "1.5px",
            stroke: "#000",
          }}
        />
        <path
          d="M8.15 5.13a2 2 0 0 1-1 1.67 1.9 1.9 0 0 1-1 .31h-.02a2 2 0 1 1 2-2Z"
          className="bM-3"
        />
        <ellipse cx={14.78} cy={2.74} className="bM-1" rx={2} ry={1.99} />
        <path
          d="M23.4 6.75v.35a1.9 1.9 0 0 1-1-.3l.32-.38a2 2 0 0 0 .68.33Z"
          className="bM-1"
        />
        <path d="M12.27 16.78h5" className="bM-4" />
        <path
          d="M25.41 5.1a2 2 0 0 1-2 2h-.05a1.9 1.9 0 0 1-1-.3 2 2 0 0 1-1-1.67 2 2 0 0 1 4 0Z"
          className="bM-3"
        />
        <path
          d="M4.06 28.45a73.87 73.87 0 0 1 21 0M14.77 29.38v-16.8"
          className="bM-4"
        />
      </g>
    </g>
  </svg> 
  ),
  bG: (
  <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} x="12.5%" y="14%">
    <defs>
      <style>{".cls-1{fill:#fff}"}</style>
    </defs>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path d="M31.56 10.75a2.63 2.63 0 0 0-3 1.91l-2.47.34c-.05-.13-.09-.25-.13-.37a10.17 10.17 0 0 0-.51-1.05l.91-3.31a2.61 2.61 0 0 0 2.37-2.11 2.61 2.61 0 0 0-4.07-2.54 2.51 2.51 0 0 0-1.06 1.6 2.37 2.37 0 0 0 .1 1.24l-1.65 1.26c-.2-.15-.4-.31-.62-.46l-.5-.33-.84-.49c-.23-.14-.46-.25-.7-.37s-.32-.14-.48-.22a3.24 3.24 0 0 0 1.27-2.56 3.33 3.33 0 0 0-6.65 0 3.24 3.24 0 0 0 1.27 2.56c-.16.08-.33.14-.48.22s-.47.23-.7.37l-.84.49c-.17.1-.33.21-.5.33s-.42.31-.62.46L10 6.46a2.47 2.47 0 0 0 .09-1.24 2.51 2.51 0 0 0-1.04-1.65 2.58 2.58 0 1 0-1.7 4.65l.92 3.31a7.25 7.25 0 0 0-.51 1.05c0 .12-.09.24-.14.37l-2.5-.29a2.64 2.64 0 0 0-3-1.91 2.58 2.58 0 0 0-2.11 3 2.54 2.54 0 0 0 1.07 1.66 2.55 2.55 0 0 0 1.48.47 3.73 3.73 0 0 0 .47 0 2.59 2.59 0 0 0 .83-.31l3.74 3.12c0 .08.05.16.08.23a6.36 6.36 0 0 0 1.17 1.76A1.69 1.69 0 0 1 9 21h-.29A4.39 4.39 0 0 0 4 23a6.33 6.33 0 0 0-.64 1.24c-.11.34-.2.62-.27.92s-.08.43-.1.65.01.19.01.29a6.89 6.89 0 0 0 1 4.06 5.82 5.82 0 0 0 .79 1 17.92 17.92 0 0 0 4.05 3.17.78.78 0 0 0 .77 0 15.54 15.54 0 0 1 14.48 0 .76.76 0 0 0 .76 0 17.92 17.92 0 0 0 4.05-3.17 5.82 5.82 0 0 0 .79-1 6.89 6.89 0 0 0 1-4.06v-.31a4.63 4.63 0 0 0-.1-.65c-.07-.3-.16-.58-.26-.92a7 7 0 0 0-.66-1.22A4.39 4.39 0 0 0 25 21a1.29 1.29 0 0 0-.24.05h-.05a1.69 1.69 0 0 1 .19-.33 6.36 6.36 0 0 0 1.1-1.8c0-.07 0-.15.08-.23l3.71-3.18a2.59 2.59 0 0 0 .83.31 3.89 3.89 0 0 0 .47 0 2.6 2.6 0 0 0 1.49-.47 2.57 2.57 0 0 0-1.05-4.64ZM10.9 18.94a35 35 0 0 1 6-9.15c.68-.77 1.41-1.5 2.16-2.2l.28-.26A1.6 1.6 0 0 1 20.5 7a1.49 1.49 0 0 1 1.05.49 1 1 0 0 1 .2.4l.06.19v.24l-.25.93-1.15 4.3c-.72 2.68-1.45 5.38-2.14 8.08A2.56 2.56 0 0 1 17 23.11l-.18.12a1.83 1.83 0 0 1-1.12.41 2 2 0 0 1-1.1-.36 18.19 18.19 0 0 1-3.45-2.85 1.31 1.31 0 0 1-.25-1.49Zm13.86 4.71a.76.76 0 0 1-.08 1.07 18.38 18.38 0 0 1-3.51 2.17c-.36.2-.79.39-1.23.59a12.56 12.56 0 0 0-2.05 1.06c-.45.32-.37 1.7-.3 2.56v.55a.77.77 0 0 1-.7.82h-.17a.77.77 0 0 1-.7-.82v-.55c.07-.86.15-2.24-.3-2.56a12.56 12.56 0 0 0-2.05-1.06c-.44-.2-.86-.39-1.23-.59A18.38 18.38 0 0 1 9 24.72a.76.76 0 0 1 0-1.07.77.77 0 0 1 1-.08 17.28 17.28 0 0 0 3.22 2c.35.18.75.36 1.16.55a13.9 13.9 0 0 1 2.31 1.21 1.66 1.66 0 0 1 .14.13.8.8 0 0 1 .13-.13 13.9 13.9 0 0 1 2.34-1.23c.41-.19.81-.37 1.16-.55a16.88 16.88 0 0 0 3.21-2 .78.78 0 0 1 1.09.1Z" />
        <path
          d="M24.68 24.72a18.38 18.38 0 0 1-3.51 2.17c-.36.2-.79.39-1.23.59a12.56 12.56 0 0 0-2.05 1.06c-.45.32-.37 1.7-.3 2.56v.55a.77.77 0 0 1-.7.82h-.17a.77.77 0 0 1-.7-.82v-.55c.07-.86.15-2.24-.3-2.56a12.56 12.56 0 0 0-2.05-1.06c-.44-.2-.86-.39-1.23-.59A18.38 18.38 0 0 1 9 24.72a.76.76 0 0 1 0-1.07.77.77 0 0 1 1-.08 17.28 17.28 0 0 0 3.22 2c.35.18.75.36 1.16.55a13.9 13.9 0 0 1 2.31 1.21 1.66 1.66 0 0 1 .14.13.8.8 0 0 1 .13-.13 13.9 13.9 0 0 1 2.34-1.23c.41-.19.81-.37 1.16-.55a16.88 16.88 0 0 0 3.21-2 .78.78 0 0 1 1.09.08.76.76 0 0 1-.08 1.09Z"
          className="cls-1"
        />
        <path
          d="M21.75 7.87a1 1 0 0 0-.2-.4A1.49 1.49 0 0 0 20.5 7a1.6 1.6 0 0 0-1.2.35l-.3.24c-.75.7-1.48 1.43-2.16 2.2a35 35 0 0 0-6 9.15 1.31 1.31 0 0 0 .25 1.52 18.19 18.19 0 0 0 3.45 2.85 2 2 0 0 0 1.1.36 1.83 1.83 0 0 0 1.12-.41l.18-.12a2.56 2.56 0 0 0 1.18-1.5c.69-2.7 1.42-5.4 2.14-8.08l1.15-4.3.25-.93v-.24Zm-2.87 5.26c-.68 2.54-1.37 5.08-2 7.62-.05.16-.09.32-.13.48s-.23.39-.58.63l-.26.19c-.18.13-.19.15-.44 0a16.07 16.07 0 0 1-3.11-2.55 34 34 0 0 1 4.52-7.36 32.78 32.78 0 0 1 3.21-3.45Z"
          className="cls-1"
        />
        <path d="m20.07 8.68-1.19 4.45c-.68 2.54-1.37 5.08-2 7.62-.05.16-.09.32-.13.48s-.23.39-.58.63l-.26.19c-.18.13-.19.15-.44 0a16.07 16.07 0 0 1-3.11-2.55 34 34 0 0 1 4.52-7.36 32.78 32.78 0 0 1 3.19-3.46Z" />
      </g>
    </g>
  </svg>
  ),  
  bR: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="45"
      height="45"
    >
      <g
        style={{
          opacity: "1",
          fill: "#000000",
          fillOpacity: "1",
          fillRule: "evenodd",
          stroke: "#000000",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "4",
          strokeDasharray: "none",
          strokeOpacity: "1",
        }}
      >
        <path
          d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z "
          style={{ strokeLinecap: "butt" }}
        />
        <path
          d="M 12.5,32 L 14,29.5 L 31,29.5 L 32.5,32 L 12.5,32 z "
          style={{ strokeLinecap: "butt" }}
        />
        <path
          d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z "
          style={{ strokeLinecap: "butt" }}
        />
        <path
          d="M 14,29.5 L 14,16.5 L 31,16.5 L 31,29.5 L 14,29.5 z "
          style={{ strokeLinecap: "butt", strokeLinejoin: "miter" }}
        />
        <path
          d="M 14,16.5 L 11,14 L 34,14 L 31,16.5 L 14,16.5 z "
          style={{ strokeLinecap: "butt" }}
        />
        <path
          d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14 L 11,14 z "
          style={{ strokeLinecap: "butt" }}
        />
        <path
          d="M 12,35.5 L 33,35.5 L 33,35.5"
          style={{
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "1",
            strokeLinejoin: "miter",
          }}
        />
        <path
          d="M 13,31.5 L 32,31.5"
          style={{
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "1",
            strokeLinejoin: "miter",
          }}
        />
        <path
          d="M 14,29.5 L 31,29.5"
          style={{
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "1",
            strokeLinejoin: "miter",
          }}
        />
        <path
          d="M 14,16.5 L 31,16.5"
          style={{
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "1",
            strokeLinejoin: "miter",
          }}
        />
        <path
          d="M 11,14 L 34,14"
          style={{
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "1",
            strokeLinejoin: "miter",
          }}
        />
      </g>
    </svg>
  ),
  bN: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="45"
      height="45"
    >
      <g
        style={{
          opacity: "1",
          fill: "none",
          fillOpacity: "1",
          fillRule: "evenodd",
          stroke: "#000000",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "4",
          strokeDasharray: "none",
          strokeOpacity: "1",
        }}
      >
        <path
          d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18"
          style={{ fill: "#000000", stroke: "#000000" }}
        />
        <path
          d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10"
          style={{ fill: "#000000", stroke: "#000000" }}
        />
        <path
          d="M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z"
          style={{ fill: "#ffffff", stroke: "#ffffff" }}
        />
        <path
          d="M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z"
          transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)"
          style={{ fill: "#ffffff", stroke: "#ffffff" }}
        />
        <path
          d="M 24.55,10.4 L 24.1,11.85 L 24.6,12 C 27.75,13 30.25,14.49 32.5,18.75 C 34.75,23.01 35.75,29.06 35.25,39 L 35.2,39.5 L 37.45,39.5 L 37.5,39 C 38,28.94 36.62,22.15 34.25,17.66 C 31.88,13.17 28.46,11.02 25.06,10.5 L 24.55,10.4 z "
          style={{ fill: "#ffffff", stroke: "none" }}
        />
      </g>
    </svg>
  ),
  bB: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="45"
      height="45"
    >
      <g
        style={{
          opacity: "1",
          fill: "none",
          fillRule: "evenodd",
          fillOpacity: "1",
          stroke: "#000000",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "4",
          strokeDasharray: "none",
          strokeOpacity: "1",
        }}
      >
        <g
          style={{ fill: "#000000", stroke: "#000000", strokeLinecap: "butt" }}
        >
          <path d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.65,38.99 6.68,38.97 6,38 C 7.35,36.54 9,36 9,36 z" />
          <path d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z" />
          <path d="M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z" />
        </g>
        <path
          d="M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18"
          style={{ fill: "none", stroke: "#ffffff", strokeLinejoin: "miter" }}
        />
      </g>
    </svg>
  ),
  bQ: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="45"
      height="45"
    >
      <g
        style={{
          fill: "#000000",
          stroke: "#000000",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
      >
        <path
          d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z"
          style={{ strokeLinecap: "butt", fill: "#000000" }}
        />
        <path d="m 9,26 c 0,2 1.5,2 2.5,4 1,1.5 1,1 0.5,3.5 -1.5,1 -1,2.5 -1,2.5 -1.5,1.5 0,2.5 0,2.5 6.5,1 16.5,1 23,0 0,0 1.5,-1 0,-2.5 0,0 0.5,-1.5 -1,-2.5 -0.5,-2.5 -0.5,-2 0.5,-3.5 1,-2 2.5,-2 2.5,-4 -8.5,-1.5 -18.5,-1.5 -27,0 z" />
        <path d="M 11.5,30 C 15,29 30,29 33.5,30" />
        <path d="m 12,33.5 c 6,-1 15,-1 21,0" />
        <circle cx="6" cy="12" r="2" />
        <circle cx="14" cy="9" r="2" />
        <circle cx="22.5" cy="8" r="2" />
        <circle cx="31" cy="9" r="2" />
        <circle cx="39" cy="12" r="2" />
        <path
          d="M 11,38.5 A 35,35 1 0 0 34,38.5"
          style={{ fill: "none", stroke: "#000000", strokeLinecap: "butt" }}
        />
        <g style={{ fill: "none", stroke: "#ffffff" }}>
          <path d="M 11,29 A 35,35 1 0 1 34,29" />
          <path d="M 12.5,31.5 L 32.5,31.5" />
          <path d="M 11.5,34.5 A 35,35 1 0 0 33.5,34.5" />
          <path d="M 10.5,37.5 A 35,35 1 0 0 34.5,37.5" />
        </g>
      </g>
    </svg>
  ),
  bK: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="45"
      height="45"
    >
      <g
        style={{
          fill: "none",
          fillOpacity: "1",
          fillRule: "evenodd",
          stroke: "#000000",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "4",
          strokeDasharray: "none",
          strokeOpacity: "1",
        }}
      >
        <path
          d="M 22.5,11.63 L 22.5,6"
          style={{ fill: "none", stroke: "#000000", strokeLinejoin: "miter" }}
          id="path6570"
        />
        <path
          d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25"
          style={{
            fill: "#000000",
            fillOpacity: "1",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
          }}
        />
        <path
          d="M 12.5,37 C 18,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 20,16 10.5,13 6.5,19.5 C 3.5,25.5 12.5,30 12.5,30 L 12.5,37"
          style={{ fill: "#000000", stroke: "#000000" }}
        />
        <path
          d="M 20,8 L 25,8"
          style={{ fill: "none", stroke: "#000000", strokeLinejoin: "miter" }}
        />
        <path
          d="M 32,29.5 C 32,29.5 40.5,25.5 38.03,19.85 C 34.15,14 25,18 22.5,24.5 L 22.5,26.6 L 22.5,24.5 C 20,18 10.85,14 6.97,19.85 C 4.5,25.5 13,29.5 13,29.5"
          style={{ fill: "none", stroke: "#ffffff" }}
        />
        <path
          d="M 12.5,30 C 18,27 27,27 32.5,30 M 12.5,33.5 C 18,30.5 27,30.5 32.5,33.5 M 12.5,37 C 18,34 27,34 32.5,37"
          style={{ fill: "none", stroke: "#ffffff" }}
        />
      </g>
    </svg>
  ),
};
