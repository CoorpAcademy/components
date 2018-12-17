import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .003h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 3h-2c-1.104 0-2 .898-2 2v14c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2V5c0-1.102-.896-2-2-2zM13 3h-2c-1.104 0-2 .898-2 2v14c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2V5c0-1.102-.896-2-2-2zM6 3H4c-1.103 0-2 .898-2 2v14c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2V5c0-1.102-.897-2-2-2z" />
    </g>
  </svg>
);

export default SvgComponent;
