import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.002.002h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M5 19H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1zM20.639 2.528a1.508 1.508 0 0 0-2.625.684l-1.21 5.936 3.507-1.316.67-4.088a1.51 1.51 0 0 0-.342-1.216zM15 18h-5a2 2 0 0 0 0 4h6.291c.984 0 1.822-.716 1.976-1.688L20.032 9.54l-3.58 1.342L15 18z" />
    </g>
  </svg>
);

export default SvgComponent;
