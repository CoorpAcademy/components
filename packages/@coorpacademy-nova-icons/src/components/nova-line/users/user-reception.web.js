import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M12.001 7c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1zM17.001 12h-2c0-1.654-1.346-3-3-3s-3 1.346-3 3h-2c0-2.757 2.243-5 5-5s5 2.243 5 5zM21.001 13h-18v2H6.22l2 8h7.562l2-8h3.219v-2zm-6.781 8H9.782l-1.5-6h7.438l-1.5 6z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
