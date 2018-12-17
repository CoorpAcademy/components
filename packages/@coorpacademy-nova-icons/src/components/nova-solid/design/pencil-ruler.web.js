import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M6 23l2-3H4zM4 9h4v10H4zM6 5c-1.104 0-2 .965-2 2.154V8h4v-.846C8 5.965 7.104 5 6 5zM11 2v2h3v2h-3v3h3v2h-3v3h3v2h-3v3h3v2h-3v2h8V2z" />
    </g>
  </svg>
);

export default SvgComponent;
