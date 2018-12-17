import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M22 5c0-1.93-1.57-3.5-3.5-3.5S15 3.07 15 5c0 1.251.666 2.343 1.656 2.962l-1.24 4.547a3.454 3.454 0 0 0-1.568.425l-2.281-2.281A3.466 3.466 0 0 0 12 9c0-1.93-1.57-3.5-3.5-3.5S5 7.07 5 9c0 1.107.527 2.084 1.332 2.727l-1.521 3.805c-.105-.01-.205-.032-.311-.032C2.57 15.5 1 17.07 1 19s1.57 3.5 3.5 3.5S8 20.93 8 19a3.485 3.485 0 0 0-1.332-2.727l1.521-3.805c.104.011.205.032.311.032.601 0 1.158-.166 1.652-.434l2.281 2.281A3.466 3.466 0 0 0 12 16c0 1.93 1.57 3.5 3.5 3.5S19 17.93 19 16a3.493 3.493 0 0 0-1.656-2.962l1.24-4.547A3.5 3.5 0 0 0 22 5z"
    />
  </svg>
);

export default SvgComponent;
