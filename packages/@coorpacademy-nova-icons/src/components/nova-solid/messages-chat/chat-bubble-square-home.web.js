import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M7.998 7h-6c-1.104 0-2 .897-2 2v9c0 1.103.896 2 2 2h1v4l5.334-4h6.666c1.104 0 2-.897 2-2v-2a9 9 0 0 1-9-9zM17.705.293a.999.999 0 0 0-1.414 0l-6 6 1.414 1.414 1.293-1.293V11a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.414l1.293 1.293 1.414-1.414-6-6zM17.998 10h-2V7h2v3z" />
    </g>
  </svg>
);

export default SvgComponent;
