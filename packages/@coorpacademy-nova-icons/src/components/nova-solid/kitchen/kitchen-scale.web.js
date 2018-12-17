import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.002-.002h24v24.001h-24z" />
    <g fill="currentColor">
      <path d="M6 7h5v2h2V7h5c.334 0 .646-.167.832-.445l2-3-1.664-1.109L17.465 5H6.535L4.832 2.445l-1.664 1.11 2 3A1 1 0 0 0 6 7zM20.949 19.684l-3-9A1 1 0 0 0 17 10H7a1 1 0 0 0-.949.684l-3 9a.994.994 0 0 0 .139.9A.994.994 0 0 0 4 21h16a.994.994 0 0 0 .81-.416.994.994 0 0 0 .139-.9zM12 19c-1.104 0-2-1-2-2s2-4 2-4 2 3 2 4-.896 2-2 2z" />
    </g>
  </svg>
);

export default SvgComponent;
