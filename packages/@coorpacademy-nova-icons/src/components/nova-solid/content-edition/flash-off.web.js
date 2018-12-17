import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <g fill="currentColor">
      <path d="M13 8.786V3l-2.572 3.214zM17.317 13.103L19 11h-3.786zM6.707 5.322L5.293 6.736l2.621 2.621L5 13h6v8l3.803-4.754 3.461 3.46 1.414-1.414z" />
    </g>
  </svg>
);

export default SvgComponent;
