import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17.5 2h-11A4.505 4.505 0 0 0 2 6.499 4.505 4.505 0 0 0 6.5 11h11c2.481 0 4.5-2.018 4.5-4.5S19.981 2 17.5 2zM16 8.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM17.5 13h-11A4.505 4.505 0 0 0 2 17.5C2 19.982 4.019 22 6.5 22h11c2.481 0 4.5-2.018 4.5-4.5S19.981 13 17.5 13zM8 19.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
    </g>
  </svg>
);

export default SvgComponent;
