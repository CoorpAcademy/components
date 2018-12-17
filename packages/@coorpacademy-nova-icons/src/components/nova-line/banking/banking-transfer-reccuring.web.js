import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M21 3H3a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 2v3H4V5h16zm-10 9v-4h4v4h-4zm4 2v4h-4v-4h4zm-6-2H4v-4h4v4zm8-4h4v4h-4v-4zM4 16h4v4H4v-4zm12 4v-4h4v4h-4z" />
      <circle cx={6} cy={11.999} r={1} />
      <circle cx={12} cy={17.999} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
