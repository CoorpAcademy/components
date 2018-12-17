import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M19 4a1 1 0 0 0-.996.91L17.087 15H2v2h16a1 1 0 0 0 .996-.91L19.913 6H22V4h-3z" />
      <circle cx={5} cy={20} r={2} />
      <circle cx={16} cy={20} r={2} />
      <path d="M4 14h10c1.104 0 2-.897 2-2V7c0-1.103-.896-2-2-2h-2V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2H4c-1.104 0-2 .898-2 2v5a2 2 0 0 0 2 2zM8 4h2v1H8V4zM4 7h10l-.003 5H4V7z" />
      <path d="M8 8h2v3H8zM5 8h2v3H5zM11 8h2v3h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
