import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 2H4c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-.003 18H4V4h16l-.003 16z" />
      <path d="M12 7h6v2h-6zM12 11h6v2h-6zM12 15h4v2h-4zM6 7h4v4H6zM6 13h4v4H6z" />
    </g>
  </svg>
);

export default SvgComponent;
