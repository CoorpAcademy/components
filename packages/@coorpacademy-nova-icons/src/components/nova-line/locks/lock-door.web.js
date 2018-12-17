import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M19 2.001H7v2h11v16H8v-2H6v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-18a1 1 0 0 0-1-1z" />
      <path d="M10 16.001v-6a1 1 0 0 0-1-1v-1c0-1.654-1.346-3-3-3s-3 1.346-3 3v1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1zm-5-8c0-.551.449-1 1-1s1 .449 1 1v1H5v-1zm3 7H4v-4h4v4z" />
      <circle cx={6} cy={13.001} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
