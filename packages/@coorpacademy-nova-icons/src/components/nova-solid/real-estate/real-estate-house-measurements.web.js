import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M8 15h2v6h3v-4h4v4h3v-6h2l-7-7z" />
      <path d="M2 2v20h4v-2H4v-2h2v-2H4v-2h2v-2H4v-2h2V8H4V4h4v2h2V4h2v2h2V4h2v2h2V4h2v2h2V2z" />
    </g>
  </svg>
);

export default SvgComponent;
