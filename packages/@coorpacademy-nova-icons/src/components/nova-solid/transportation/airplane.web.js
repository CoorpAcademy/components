import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.002 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M9 2h5.999v2H9zM21.818 8.811A1.538 1.538 0 0 0 20.463 8H14V7a2 2 0 0 0-4 0v1H3.536a1.538 1.538 0 0 0-1.279 2.389c.264.394.658.684 1.115.813L10 13.633V17H8a2 2 0 0 0-2 2v2h12v-2a2 2 0 0 0-2-2h-2v-3.367l6.626-2.431a1.994 1.994 0 0 0 1.115-.813 1.537 1.537 0 0 0 .077-1.578zM12 12a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 12z" />
    </g>
  </svg>
);

export default SvgComponent;
