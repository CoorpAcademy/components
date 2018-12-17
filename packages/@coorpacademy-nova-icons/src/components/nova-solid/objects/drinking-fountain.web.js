import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001 0H24v24.001H-.001z" />
    <g fill="currentColor">
      <path d="M20 11a1 1 0 0 0-1-1h-8V5a1.001 1.001 0 0 1 2 0v1h2V5c0-1.654-1.346-3-3-3S9 3.346 9 5v5H5a1 1 0 0 0-1 1c0 2.344 1.035 5.339 5.789 6.723l-.76 3.035A1 1 0 0 0 10 22h4a1.003 1.003 0 0 0 .971-1.242l-.76-3.035C18.965 16.339 20 13.344 20 11z" />
      <circle cx={14} cy={8} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
