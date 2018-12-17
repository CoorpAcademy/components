import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M19 6a1 1 0 0 0-.996.91L17.087 17H2v2h16a1 1 0 0 0 .996-.91L19.913 8H22V6h-3z" />
      <circle cx={5} cy={22} r={2} />
      <circle cx={16} cy={22} r={2} />
      <path d="M14.707 8.707l-1.414-1.415L11 9.585V4H9v5.585L6.707 7.292 5.293 8.707 10 13.414z" />
    </g>
  </svg>
);

export default SvgComponent;
