import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 13h4v-2h-4V8l-5 4 5 4zM2 11h2v2H2zM2 8h2v2H2zM2 5h2v2H2zM8 2h2v2H8zM5 2h2v2H5zM2 2h2v2H2zM2 14h2v2H2zM2 17h2v2H2zM2 20h2v2H2zM5 20h2v2H5zM8 20h2v2H8z" />
      <path d="M11 2v5h2V4h7v16h-7v-2h-2v4h11V2z" />
    </g>
  </svg>
);

export default SvgComponent;
