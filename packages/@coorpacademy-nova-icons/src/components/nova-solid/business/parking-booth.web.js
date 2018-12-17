import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M12 2C8.141 2 5 5.14 5 9c0 .083.011.164.03.243l2 8A1 1 0 0 0 8 18h3v4h2v-4h3c.459 0 .859-.312.971-.757l2-8C18.99 9.164 19 9.083 19 9c0-3.86-3.14-7-7-7zm3 13H9v-2h6v2zm-2-6V6h-2v3H8a4 4 0 0 1 8 0h-3z"
    />
  </svg>
);

export default SvgComponent;
