import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M21 8V6H3v2h1.63L11 13.46V22h2v-8.54L19.37 8H21zM7.703 8H11v2.826L7.703 8zM13 10.826V8h3.297L13 10.826z" />
      <circle cx={19} cy={4} r={1} />
      <circle cx={15} cy={4} r={1} />
      <circle cx={9} cy={4} r={1} />
      <circle cx={5} cy={4} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
