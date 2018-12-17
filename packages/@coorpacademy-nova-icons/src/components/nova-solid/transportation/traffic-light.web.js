import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M3 6l3 1.2V4H3zM3 12l3 1.2V10H3zM3 18l3 1.2V16H3zM18 19.2l3-1.2v-2h-3zM15 2H9a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-3 18a2 2 0 1 1 .001-4.001A2 2 0 0 1 12 20zm0-6a2 2 0 1 1 .001-4.001A2 2 0 0 1 12 14zm0-6a2 2 0 1 1 .001-4.001A2 2 0 0 1 12 8zM18 4v3.2L21 6V4zM18 13.2l3-1.2v-2h-3z" />
    </g>
  </svg>
);

export default SvgComponent;
