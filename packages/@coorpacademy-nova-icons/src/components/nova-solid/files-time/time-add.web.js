import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M9 0C4.038 0 0 4.038 0 9s4.038 9 9 9 9-4.038 9-9-4.037-9-9-9zm2.446 11.832L8 9.535V4h2v4.465l2.555 1.703-1.109 1.664zM21 19v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
    </g>
  </svg>
);

export default SvgComponent;
