import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M7 4h7v6H7zM20 7c0-1.804-2.408-3-4-3h-1v6h1c1.592 0 4-1.196 4-3zM4 3h2v8H4zM4 17c0 1.804 2.408 3 4 3h1v-6H8c-1.592 0-4 1.196-4 3zM10 14h7v6h-7zM18 13h2v8h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
