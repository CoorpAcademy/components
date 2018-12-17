import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M20 14v4l-2 2v-3l-2 1v5h4l2-4v-6zM6 20l-2-2v-4l-2-1v6l2 4h4v-5l-2-1zM12 3s-5 6.238-5 9 2.238 5 5 5 5-2.238 5-5-5-9-5-9zm.656 12v-1.049a2.518 2.518 0 0 0 1.286-1.288H15A3.512 3.512 0 0 1 12.656 15z" />
    </g>
  </svg>
);

export default SvgComponent;
