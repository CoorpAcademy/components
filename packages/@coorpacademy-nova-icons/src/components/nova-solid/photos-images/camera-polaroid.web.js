import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 13H4a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h3v5h10v-5h3a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2zm-5 7H9v-4h6v4zM19 4.001a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v8h14v-8zM7.5 10.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM12 9a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
    </g>
  </svg>
);

export default SvgComponent;
