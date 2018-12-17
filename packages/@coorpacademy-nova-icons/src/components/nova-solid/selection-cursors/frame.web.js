import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path
      fill="currentColor"
      d="M20 21h-6v-2h5v-5h2v6a1 1 0 0 1-1 1zM21 10h-2V5h-5V3h6a1 1 0 0 1 1 1v6zM5 10H3V4a1 1 0 0 1 1-1h6v2H5v5zM10 21H4a1 1 0 0 1-1-1v-6h2v5h5v2z"
    />
  </svg>
);

export default SvgComponent;
