import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={12} cy={8} r={2} />
      <path d="M21.707 11.293l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13h2v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8h2a1.002 1.002 0 0 0 .707-1.707zM10.333 16.5L7 19v-5l3.333 2.5zM9 13h6l-3 2.25L9 13zm3 4.75L15 20H9l3-2.25zm1.667-1.25L17 14v5l-3.333-2.5zM12 4.414L18.586 11H5.414L12 4.414z" />
    </g>
  </svg>
);

export default SvgComponent;
