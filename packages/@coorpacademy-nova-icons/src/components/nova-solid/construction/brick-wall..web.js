import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 20h6v3H2zM2 15h4v3H2zM10 20h6v3h-6zM8 15h6v3H8zM16 15h6v3h-6zM2 5h4v3H2zM8 5h6v3H8zM18 20h4v3h-4zM2 10h6v3H2zM10 10h6v3h-6z" />
    </g>
  </svg>
);

export default SvgComponent;
