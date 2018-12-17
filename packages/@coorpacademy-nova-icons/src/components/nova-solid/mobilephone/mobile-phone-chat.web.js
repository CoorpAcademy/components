import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.007h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 16.999v1H4v-12h8v1h2v-3a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3h-2zM22 8.999h-7v7l2-2h5z" />
    </g>
  </svg>
);

export default SvgComponent;
