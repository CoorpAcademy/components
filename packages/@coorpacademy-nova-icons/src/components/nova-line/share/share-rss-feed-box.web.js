import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M20 22H4c-1.104 0-2-.898-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16c0 1.102-.896 2-2 2zM4 4v16h15.997L20 4H4z"
      fill="currentColor"
    />
    <circle cx={8} cy={16} r={2} fill="currentColor" />
    <path
      d="M14 18h-2c0-3.309-2.691-6-6-6v-2c4.411 0 8 3.588 8 8z"
      fill="currentColor"
    />
    <path
      d="M18 18h-2c0-5.516-4.486-10-10-10V6c6.617 0 12 5.383 12 12z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
