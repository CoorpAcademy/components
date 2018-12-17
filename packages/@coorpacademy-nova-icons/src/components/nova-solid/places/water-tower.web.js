import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M19 14H3v2h3.778L5 24h4.045L11 21.486 12.955 24H17l-1.778-8H19v-2zM7.196 23.119l1.127-5.074 1.41 1.813-2.537 3.261zm5.071-3.261l1.41-1.813 1.127 5.074-2.537-3.261zM11 18.228L9.267 16h3.466L11 18.228zM5 6h12v7H5zM5 5h12a1 1 0 0 0 .581-1.813l-6-2.772a1 1 0 0 0-1.162 0l-6 2.772A.998.998 0 0 0 5 5z" />
    </g>
  </svg>
);

export default SvgComponent;
