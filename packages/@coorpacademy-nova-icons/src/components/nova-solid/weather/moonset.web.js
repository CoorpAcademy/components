import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M10.439 2.005c.266.733.418 1.522.418 2.346a6.907 6.907 0 0 1-6.906 6.906 6.897 6.897 0 0 1-2.347-.417c.961 2.657 3.5 4.562 6.49 4.562A6.907 6.907 0 0 0 15 8.494a6.901 6.901 0 0 0-4.561-6.489zM19 17.005v-4h-4v4h-2l4 4 4-4z" />
    </g>
  </svg>
);

export default SvgComponent;
