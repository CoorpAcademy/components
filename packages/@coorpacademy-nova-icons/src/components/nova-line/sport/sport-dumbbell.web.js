import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.002H0z" />
    <g fill="currentColor">
      <path d="M19 5h-2c-1.103 0-2 .896-2 2v3H9V7c0-1.104-.897-2-2-2H5c-1.103 0-2 .896-2 2v8c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-3h6v3c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2V7c0-1.104-.897-2-2-2zM5 15V7h2l.001 8H5zm12 0V7h2l.001 8H17zM22 9h2v4h-2zM0 9h2v4H0z" />
    </g>
  </svg>
);

export default SvgComponent;
