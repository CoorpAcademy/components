import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M9 2H7c-1.103 0-2 .896-2 2v14c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2V4c0-1.104-.897-2-2-2zM7 18V4h2l.001 14H7zM17 2h-2c-1.103 0-2 .896-2 2v14c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2V4c0-1.104-.897-2-2-2zm-2 16V4h2l.001 14H15z" />
    </g>
  </svg>
);

export default SvgComponent;
