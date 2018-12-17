import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .006h24v24H0z" />
    <g fill="currentColor">
      <path d="M21 2.001H3v20h2v-6h16v-14zm-2 4h-2v2h2v2h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5v-2h2v-2H5v-2h2v-2H5v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2z" />
      <path d="M9 6.001h2v2H9zM13 6.001h2v2h-2zM11 8.001h2v2h-2zM7 8.001h2v2H7zM15 8.001h2v2h-2zM9 10.001h2v2H9zM13 10.001h2v2h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
