import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M21 7.436V5.003a1 1 0 0 0-1-1H4c-.552 0-1 .449-1 1v2.433a4.987 4.987 0 0 0-3 4.567 4.988 4.988 0 0 0 3 4.568v2.432a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2.432c1.8-.783 3-2.565 3-4.568 0-2.003-1.2-3.784-3-4.567zm-6 2.567h-3.5a.5.5 0 0 0 0 1h1c1.379 0 2.5 1.122 2.5 2.5 0 1.207-.86 2.217-2 2.449v1.051h-2v-1H9v-2h3.5a.5.5 0 0 0 0-1h-1a2.503 2.503 0 0 1-2.5-2.5c0-1.207.86-2.217 2-2.449V7.003h2v1h2v2z"
    />
  </svg>
);

export default SvgComponent;
