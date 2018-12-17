import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M14 4h8v2h-8zM11 5c0-1.654-1.346-3-3-3S5 3.346 5 5v9.152A4.499 4.499 0 0 0 3.5 17.5C3.5 19.982 5.519 22 8 22s4.5-2.018 4.5-4.5a4.5 4.5 0 0 0-1.5-3.348V5zM8 20a2.503 2.503 0 0 1-2.5-2.5 2.5 2.5 0 0 1 1.073-2.047L7 15.154V5c0-.551.449-1 1-1s1 .449 1 1v10.154l.427.299A2.5 2.5 0 0 1 10.5 17.5c0 1.379-1.122 2.5-2.5 2.5z" />
    </g>
  </svg>
);

export default SvgComponent;
