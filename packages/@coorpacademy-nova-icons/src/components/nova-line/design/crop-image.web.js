import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M9.065 11.687L7 15h10l-3.727-5.979-2.935 4.708z" />
      <path d="M6 17V8H4v9c0 1.103.897 2 2 2h17v-2H6z" />
      <path d="M18 16h2V7c0-1.102-.897-2-2-2H1v2h17v9zM4 1h2v3H4zM18 20h2v3h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
