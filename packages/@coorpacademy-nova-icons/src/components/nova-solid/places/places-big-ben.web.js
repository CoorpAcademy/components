import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <g fill="currentColor">
      <path d="M13.581.813a1.944 1.944 0 0 0-3.162 0L6 7h12L13.581.813zM5 8v12a1 1 0 0 0 1 1h2v3h8v-3h2a1 1 0 0 0 1-1V8H5zm12 11H7v-9h10v9z" />
      <path d="M11 17h4v-2h-3v-3h-2v4a1 1 0 0 0 1 1z" />
    </g>
  </svg>
);

export default SvgComponent;
