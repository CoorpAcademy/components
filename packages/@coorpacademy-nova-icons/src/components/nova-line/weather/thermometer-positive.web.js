import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 5h-3V2h-2v3h-3v2h3v3h2V7h3zM10 5c0-1.654-1.346-3-3-3S4 3.346 4 5v9.152A4.499 4.499 0 0 0 2.5 17.5C2.5 19.982 4.519 22 7 22s4.5-2.018 4.5-4.5a4.5 4.5 0 0 0-1.5-3.348V5zM7 20a2.503 2.503 0 0 1-2.5-2.5 2.5 2.5 0 0 1 1.073-2.047L6 15.154V5c0-.551.449-1 1-1s1 .449 1 1v10.154l.427.299A2.502 2.502 0 0 1 9.5 17.5C9.5 18.879 8.378 20 7 20z" />
    </g>
  </svg>
);

export default SvgComponent;
