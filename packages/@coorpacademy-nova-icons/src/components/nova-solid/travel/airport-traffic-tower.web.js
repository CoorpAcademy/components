import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M16.583 8.354A1.003 1.003 0 0 0 15.819 8H12V6h1.279a1 1 0 0 0 .949-.684l.333-1A1.002 1.002 0 0 0 13.613 3H8.388a1 1 0 0 0-.95 1.316l.333 1c.137.409.519.684.95.684H10v2H6.181a1 1 0 0 0-.986 1.165l.666 4a1 1 0 0 0 .986.835h8.306a1 1 0 0 0 .986-.835l.667-4a1.005 1.005 0 0 0-.223-.811zM10 12H7v-2h3v2zm5 0h-3v-2h3v2zM7.6 15l-1.361 6.804A.999.999 0 0 0 7.22 23h7.561a.998.998 0 0 0 .98-1.196L14.4 15H7.6z" />
    </g>
  </svg>
);

export default SvgComponent;
