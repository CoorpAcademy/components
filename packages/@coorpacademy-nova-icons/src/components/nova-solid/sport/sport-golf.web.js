import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.002H0z" />
    <g fill="currentColor">
      <path d="M7 19h4v3h2v-3h4v-2H7zM12 16c3.86 0 7-3.14 7-7 0-3.859-3.14-7-7-7S5 5.141 5 9c0 3.86 3.14 7 7 7zm-2-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm2-5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-2-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-2 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-2-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM8 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </g>
  </svg>
);

export default SvgComponent;
