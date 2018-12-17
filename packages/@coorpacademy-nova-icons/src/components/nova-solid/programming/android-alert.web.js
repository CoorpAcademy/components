import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M15 7.999H1a1 1 0 0 0-1 1v7h2v-6h1v6a1 1 0 0 0 1 1h1v3h2v-3h2v3h2v-3h1a1 1 0 0 0 1-1v-6h1v6h2V9a1 1 0 0 0-1-1.001zM3 5.999a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.963 4.963 0 0 0-.833-2.752l1.54-1.54L12.293.292l-1.54 1.54a4.972 4.972 0 0 0-5.506 0L3.707.292 2.293 1.707l1.54 1.54A4.97 4.97 0 0 0 3 5.999zM20 13.998h2v6h-2z" />
      <circle cx={21} cy={21.998} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
