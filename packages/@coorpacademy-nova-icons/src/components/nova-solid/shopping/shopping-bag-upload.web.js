import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M9 2c1.654 0 3 1.346 3 3h2c0-2.757-2.243-5-5-5S4 2.243 4 5h2c0-1.654 1.346-3 3-3zM17.441 12.18L17 6H1L0 20h12.08a7.026 7.026 0 0 1-.08-1c0-3.33 2.326-6.11 5.441-6.82zM19 14.585l-4.707 4.707 1.414 1.414L18 18.413V24h2v-5.587l2.293 2.293 1.414-1.414z" />
    </g>
  </svg>
);

export default SvgComponent;
