import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M23 12h-4.344l-5.035 5.035-7.07 1.414L7.841 12H1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1z" />
      <path d="M9.808 12.365l2.828 2.827-3.535.707zM20.414 7.414a2 2 0 1 0-2.828-2.828l-6.364 6.364 2.829 2.829 6.363-6.365z" />
    </g>
  </svg>
);

export default SvgComponent;
