import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M7 3.003h2v2H7zM3 7.003h2v2H3zM3 15.003h2v2H3zM7 19.003h2v2H7zM3 3.003h2v2H3zM3 19.003h2v2H3zM15 19.003h2v2h-2zM19 7.003h2v2h-2zM19 15.003h2v2h-2zM15 3.003h2v2h-2zM19 19.003h2v2h-2zM19 3.003h2v2h-2z" />
      <path d="M13 3.003h-2v8H3v2h8v8h2v-8h8v-2h-8z" />
    </g>
  </svg>
);

export default SvgComponent;
