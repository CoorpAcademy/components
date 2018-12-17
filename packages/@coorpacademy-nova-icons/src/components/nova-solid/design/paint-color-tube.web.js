import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M3.736 16.142l2.122-2.122 2.121 2.122-2.122 2.122zM8.686 15.436a2 2 0 0 0 2.828 0l4.95-4.949-4.95-4.95-4.949 4.95a2 2 0 0 0 0 2.828l2.121 2.121zM20 8.365L13.636 2l-1.414 2.829 4.95 4.95zM7 19h13v2H7z" />
    </g>
  </svg>
);

export default SvgComponent;
