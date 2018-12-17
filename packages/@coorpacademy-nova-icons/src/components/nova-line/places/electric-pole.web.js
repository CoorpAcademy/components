import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M21 7.999v-2H3v2h1.63l6.37 5.46v8.54h2v-8.54l6.37-5.46H21zm-13.297 0H11v2.826L7.703 7.999zM13 10.825V7.999h3.297L13 10.825z" />
      <circle cx={19} cy={3.999} r={1.5} />
      <circle cx={15} cy={3.999} r={1.5} />
      <circle cx={9} cy={3.999} r={1.5} />
      <circle cx={5} cy={3.999} r={1.5} />
    </g>
  </svg>
);

export default SvgComponent;
