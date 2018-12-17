import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M9 4.002v4h3c2.757 0 5 2.243 5 5v2h-4v-2c0-.552-.449-1-1-1H9v8h13v-16H9z" />
      <path d="M12 9.002H6.414l2-2L7 5.587l-4.414 4.414L7 14.416l1.414-1.414-2-2H12c1.104 0 2 .898 2 2v1h2v-1c0-2.206-1.795-4-4-4z" />
    </g>
  </svg>
);

export default SvgComponent;
