import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path
      d="M14 18.001H6v-16h10v8h2v-9a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h13v-2zm-10 0H2v-16h2v16z"
      fill="currentColor"
    />
    <path
      d="M21 21.001h-2v-3h1c1.104 0 2-.897 2-2s-.896-2-2-2-2 .897-2 2h-2c0-2.206 1.795-4 4-4s4 1.794 4 4a4.01 4.01 0 0 1-3 3.874v1.126z"
      fill="currentColor"
    />
    <circle cx={20} cy={23.001} r={1} fill="currentColor" />
  </svg>
);

export default SvgComponent;
