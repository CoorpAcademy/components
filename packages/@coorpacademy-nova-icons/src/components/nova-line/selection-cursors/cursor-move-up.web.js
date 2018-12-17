import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 14.001c-2.205 0-4 1.794-4 4s1.795 4 4 4 4-1.794 4-4-1.795-4-4-4zm0 6c-1.104 0-2-.897-2-2 0-1.102.896-2 2-2s2 .898 2 2c0 1.103-.896 2-2 2zM11 12.001h2v-4h3l-4-6-4 6h3z" />
    </g>
  </svg>
);

export default SvgComponent;
