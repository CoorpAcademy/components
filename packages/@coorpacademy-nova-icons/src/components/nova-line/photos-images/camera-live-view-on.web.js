import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 19.999h-4v2h4c1.103 0 2-.897 2-2v-4h-2v4zM20 1.999h-4v2h4v4h2v-4c0-1.103-.897-2-2-2zM4 3.999h4v-2H4c-1.103 0-2 .897-2 2v4h2v-4zM4 15.999H2v4c0 1.103.897 2 2 2h4v-2H4v-4zM20 11.999s-3.381-5-8-5-8 5-8 5 3.381 5 8 5 8-5 8-5zm-8 3a3 3 0 1 1 0-6 3 3 0 1 1 0 6z" />
      <circle cx={12} cy={11.999} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
