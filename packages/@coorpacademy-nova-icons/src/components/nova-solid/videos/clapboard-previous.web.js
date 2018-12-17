import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M13 7.003l3-4h-5l-3 4zM8 3.003H1v4h4zM19 3.003l-3 4h7v-4zM1 19.003a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-10H1v10zm13-8h2v8h-2v-8zm-2 0v8l-6-4 6-4z" />
    </g>
  </svg>
);

export default SvgComponent;
