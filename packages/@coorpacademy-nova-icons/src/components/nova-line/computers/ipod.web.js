import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M16 2.001H8c-1.103 0-2 .896-2 2v16c0 1.103.897 2 2 2h8c1.103 0 2-.897 2-2v-16c0-1.104-.897-2-2-2zm0 2v5H8v-5h8zm-8 16v-9h8l.001 9H8z" />
      <path d="M12 13.001c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1z" />
    </g>
  </svg>
);

export default SvgComponent;
