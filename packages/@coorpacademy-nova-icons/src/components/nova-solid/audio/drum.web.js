import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M21 9.003H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM21 20.003H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM4 12.003v7h16v-7H4zm4 5H6v-3h2v3zm5 0h-2v-3h2v3zm5 0h-2v-3h2v3zM16 7.003a2 2 0 0 0 1.959-1.6l4.357-1.452-.633-1.898-4.366 1.456A1.988 1.988 0 0 0 16 3.003a2 2 0 0 0 0 4zM8 7.003a2 2 0 0 0 0-4c-.507 0-.965.196-1.318.506L2.316 2.054l-.632 1.898 4.357 1.452A2 2 0 0 0 8 7.003z" />
    </g>
  </svg>
);

export default SvgComponent;
