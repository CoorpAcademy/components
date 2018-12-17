import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M17 15v2h1.25A7.93 7.93 0 0 1 13 19.935V11h2.936V9H13V6h-2v3H8v2h3v8.935A7.933 7.933 0 0 1 5.75 17H7v-2H2.322l.718 1.445A9.948 9.948 0 0 0 12 22a9.948 9.948 0 0 0 8.96-5.555L21.678 15H17z" />
      <circle cx={12} cy={3} r={2} />
    </g>
  </svg>
);

export default SvgComponent;
