import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={12} cy={12} r={3} />
      <path d="M20 6.001h-1.93a2 2 0 0 1-1.664-.89l-.812-1.22A2 2 0 0 0 13.93 3h-3.86c-.669 0-1.293.335-1.664.89l-.812 1.22c-.371.557-.995.89-1.664.89H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h4l3.293 3.707a.999.999 0 0 0 1.414 0L16 19h4a2 2 0 0 0 2-2V8a2 2 0 0 0-2-1.999zM12 17c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5c0 2.758-2.243 5-5 5z" />
    </g>
  </svg>
);

export default SvgComponent;
