import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M14 22a1 1 0 0 1-.707-.293l-11-11A.996.996 0 0 1 2 10V3a1 1 0 0 1 1-1h7c.266 0 .52.105.707.293l11 11a1 1 0 0 1-.336 1.636L16.77 16.77l-1.841 4.602A.997.997 0 0 1 14 22zM4 9.586l9.635 9.635 1.437-3.592c.103-.254.304-.455.558-.558l3.592-1.437L9.586 4H4v5.586z"
      fill="currentColor"
    />
    <circle cx={7} cy={7} r={2} fill="currentColor" />
  </svg>
);

export default SvgComponent;
