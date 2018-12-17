import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11 16.042c-4.168.325-7 2.682-7 5.958v2h7v-7.958zM13 16.042V24h7v-2c0-3.276-2.832-5.633-7-5.958zM16 21a1 1 0 1 1 0-2 1 1 0 1 1 0 2z" />
      <g>
        <path d="M17 6V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1h10zM7 8v2c0 2.757 2.243 5 5 5s5-2.243 5-5V8H7zm5 5c-1.654 0-3-1.346-3-3h6c0 1.654-1.346 3-3 3z" />
      </g>
    </g>
  </svg>
);

export default SvgComponent;
