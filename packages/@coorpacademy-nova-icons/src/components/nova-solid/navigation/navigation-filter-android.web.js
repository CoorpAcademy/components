import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <path fill="currentColor" d="M18 22H3a1 1 0 0 1-1-1V6h2v14h14v2z" />
    <g fill="currentColor">
      <circle cx={12.5} cy={9.5} r={0.75} />
      <circle cx={15.5} cy={9.5} r={0.75} />
      <path d="M21 2H7a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-3 13h-8v-2h8v2zm0-4v1h-8v-1c0-1.089.439-2.073 1.144-2.795L8.939 6.001 10 4.94l2.398 2.398c.492-.215 1.032-.337 1.602-.337s1.11.123 1.602.338L18 4.94 19.06 6l-2.205 2.205A3.983 3.983 0 0 1 18 11z" />
    </g>
  </svg>
);

export default SvgComponent;
