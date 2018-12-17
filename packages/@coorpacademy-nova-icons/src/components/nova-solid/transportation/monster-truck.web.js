import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 11V6a2 2 0 0 0-2-2V2h-3v2H9V2H6v2a2 2 0 0 0-2 2v5a2 2 0 0 0-2 2v8h2a2 2 0 0 0 4 0h8a2 2 0 0 0 4 0h2v-8a2 2 0 0 0-2-2zM6 6h5v5H6V6zM3.5 16.5a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0zM10 19H8v-5h2v5zm3 0h-2v-5h2v5zm0-13h5v5h-5V6zm1 13v-5h2v5h-2zm5.25-1.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" />
      <path d="M21 6h2v4h-2zM1 6h2v4H1z" />
    </g>
  </svg>
);

export default SvgComponent;
