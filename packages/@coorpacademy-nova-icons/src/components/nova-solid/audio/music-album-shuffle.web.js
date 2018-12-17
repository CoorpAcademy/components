import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M9 9.002H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-11h-5a2 2 0 0 1-2-2zm2.69 3.589a.75.75 0 0 1 .31.606v5.305a1.5 1.5 0 1 1-1.5-1.5v-2.771L7 15.372v4.13a1.5 1.5 0 1 1-1.5-1.5v-3.174c0-.326.209-.613.518-.713l5-1.632a.754.754 0 0 1 .672.108zM19 7.002h-1.52l-1.2-1.5 1.2-1.5H19v1l3-2-3-2v1h-2.48L15 3.902l-1.519-1.9H11v2h1.519l1.201 1.5-1.201 1.5H11v2h2.481L15 7.102l1.52 1.9H19v1l3-2-3-2z" />
    </g>
  </svg>
);

export default SvgComponent;
