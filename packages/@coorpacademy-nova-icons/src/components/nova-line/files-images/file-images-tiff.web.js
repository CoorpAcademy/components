import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5 3.001h10v4h4v1h2V5.587l-4.586-4.586H5c-1.103 0-2 .897-2 2v5h2v-5zM19 21.001H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM13 10.001c-1.103 0-2 .897-2 2v6h2v-3h3v-2h-3v-1h4v-2h-4zM23 12.001v-2h-4c-1.103 0-2 .897-2 2v6h2v-3h3v-2h-3v-1h4zM8 10.001h2v8H8zM3 18.001h2v-6h2v-2H1v2h2z" />
    </g>
  </svg>
);

export default SvgComponent;
