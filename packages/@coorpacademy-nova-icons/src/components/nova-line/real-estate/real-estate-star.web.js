import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M21.707 12.293l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 14h2v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8h2a1 1 0 0 0 .707-1.707zM18 12a1 1 0 0 0-1 1v8H7v-8a1 1 0 0 0-1-1h-.586L12 5.414 18.586 12H18z" />
      <path d="M11 14.333H8.5l2.163 1.994L9.5 19l2.5-1.653L14.5 19l-1.163-2.673 2.163-1.994H13L12 12z" />
    </g>
  </svg>
);

export default SvgComponent;
