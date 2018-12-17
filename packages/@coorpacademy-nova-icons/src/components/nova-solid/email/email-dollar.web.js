import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <g fill="currentColor">
      <path d="M8.581 18.813a.995.995 0 0 1-1.162 0l-7.364-5.26A2.003 2.003 0 0 0 0 14v8c0 1.103.896 2 2 2h12c1.104 0 2-.897 2-2v-8c0-.153-.021-.303-.055-.446l-7.364 5.259z" />
      <path d="M8 16.771l6.555-4.683A1.964 1.964 0 0 0 14 12H2c-.193 0-.378.036-.555.088L8 16.771zM21 5h-2a1 1 0 0 1 0-2h4V1h-2V0h-2v1c-1.654 0-3 1.346-3 3s1.346 3 3 3h2a1 1 0 1 1 0 2h-4v2h2v1h2v-1c1.654 0 3-1.346 3-3s-1.346-3-3-3z" />
    </g>
  </svg>
);

export default SvgComponent;
