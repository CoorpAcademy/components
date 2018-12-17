import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 18a8 8 0 0 1 8-8c.692 0 1.359.097 2 .263V4.999c0-1.102-.897-2-2-2h-2v-3h-2v3H6v-3H4v3H2c-1.103 0-2 .898-2 2v13c0 1.102.897 2 2 2h8.262A7.99 7.99 0 0 1 10 18zM2 4.999h16v3H2v-3z" />
      <path d="M18 12l1.714 4.286H24l-3.708 3.13L22.285 24 18 21.166 13.714 24l1.994-4.584L12 16.286h4.285z" />
    </g>
  </svg>
);

export default SvgComponent;
