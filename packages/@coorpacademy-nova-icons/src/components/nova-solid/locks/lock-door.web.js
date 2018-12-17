import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 3.001H8a1 1 0 0 0-1 1v1h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-16a1 1 0 0 0-1-1z" />
      <path d="M10 10.001v-1c0-1.654-1.346-3-3-3s-3 1.346-3 3v1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-4-1c0-.551.449-1 1-1s1 .449 1 1v1H6v-1zm3 7H5v-4h4v4z" />
      <circle cx={7} cy={14.001} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
