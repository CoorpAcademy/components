import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.002 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M21.467 19.6L18 17V7l-1.447-3.894A1.986 1.986 0 0 0 15 2.033c-.661.08-1.25.467-1.553 1.073L12 7v10l-3.467 2.6a1.334 1.334 0 0 0 .8 2.4h11.334a1.333 1.333 0 0 0 .8-2.4zM15 9a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 15 9zM14.764 2c.081 0 .157.023.236.033.079-.01.155-.033.236-.033h-.472zM10 9V7H5V2H3v20h2V9z" />
    </g>
  </svg>
);

export default SvgComponent;
