import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M13 7h5v2h-5zM13 11h5v2h-5zM13 15h3v2h-3zM8 7h3v2H8zM6 11h5v2H6zM6 15h5v2H6z" />
      <path d="M20 2H4c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-.003 18H4V4h16l-.003 16z" />
    </g>
  </svg>
);

export default SvgComponent;
