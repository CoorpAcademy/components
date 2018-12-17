import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 .004c-1.103 0-2 .898-2 2v18c0 1.102.897 2 2 2h14c1.103 0 2-.898 2-2V4.59L13.414.004H2zm10.632 11.262L10 10.389v6.112a2.5 2.5 0 1 1-2-2.45V7.615l5.265 1.754-.633 1.897zM12 6.004v-5l5 5h-5zM20 14.008h2v6h-2z" />
      <circle cx={21} cy={22.004} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
