import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M5 3a2 2 0 0 0-2 2v6h4L6 6h5V3H5zM19 3a2 2 0 0 1 2 2v6h-4l1-5h-5V3h6zM5 21c-1.105 0-2-.894-2-2v-6h4l-1 5h5v3H5zM19 21a2 2 0 0 0 2-2v-6h-4l1 5h-5v3h6z" />
    </g>
  </svg>
);

export default SvgComponent;
