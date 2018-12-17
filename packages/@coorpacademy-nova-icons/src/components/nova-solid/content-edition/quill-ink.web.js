import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M15 4.222v2.85l-1.756-1.756a8.688 8.688 0 0 0-.968.817c-2.753 2.754-2.392 4.954-1.377 5.969L8 15h2l2.21-2.21c1.162.238 2.781-.189 4.659-2.067C19.623 7.969 21 2 21 2s-3.203.743-6 2.222zM15 22a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h1v-2h7v2h1a2 2 0 0 1 2 2v2z" />
    </g>
  </svg>
);

export default SvgComponent;
