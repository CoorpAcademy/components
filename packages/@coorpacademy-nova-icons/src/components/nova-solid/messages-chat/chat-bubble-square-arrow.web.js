import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M14.998 7h-13c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h1v4l5.333-4h6.667c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zM15.513 2.828L23.998 0l-2.829 8.484-1.414-4.242z" />
    </g>
  </svg>
);

export default SvgComponent;
