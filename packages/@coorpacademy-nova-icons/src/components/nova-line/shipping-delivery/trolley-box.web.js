import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M8 12h3v2H8z" />
      <path d="M6 17h4v-2H7V9h6v3h2V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v4H6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zM9 4h4v3H9V4z" />
      <path d="M20 4V2h-3a1 1 0 0 0-1 1v11c-2.205 0-4 1.794-4 4H5a.996.996 0 0 0-.707.293l-2 2 1.414 1.414L5.414 20h7.143c.693 1.19 1.97 2 3.443 2 2.205 0 4-1.794 4-4 0-1.474-.811-2.75-2-3.443V4h2zm-4 16c-1.104 0-2-.897-2-2s.896-2 2-2 2 .897 2 2a2 2 0 0 1-2 2z" />
    </g>
  </svg>
);

export default SvgComponent;
