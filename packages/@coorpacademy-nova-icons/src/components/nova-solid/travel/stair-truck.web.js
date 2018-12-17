import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <g fill="currentColor">
      <circle cx={9} cy={21} r={2} />
      <circle cx={18} cy={21} r={2} />
      <path d="M14 4H3v4h8l5.091 8H10v-5a1 1 0 0 0-1-1H7c-2.206 0-4 1.794-4 4v6a1 1 0 0 0 1 1h2.005c.028-1.648 1.356-2.979 2.995-2.979s2.967 1.331 2.995 2.979H15a3.001 3.001 0 0 1 6 0h2v-2L14 4zM6.5 15a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
    </g>
  </svg>
);

export default SvgComponent;
