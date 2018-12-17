import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <path
      d="M20 22.001H3a1 1 0 0 1-1-1v-18a1 1 0 0 1 1-1h17a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-16-2h15v-16H4v16z"
      fill="currentColor"
    />
    <path
      fill="currentColor"
      d="M6 6.001h11v3H6zM6 10.001h5v2H6zM6 13.001h5v2H6zM6 16.001h5v2H6zM12 10.001h5v2h-5zM12 13.001h5v2h-5zM12 16.001h5v2h-5z"
    />
  </svg>
);

export default SvgComponent;
