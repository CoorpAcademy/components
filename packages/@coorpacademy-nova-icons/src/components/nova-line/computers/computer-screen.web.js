import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M20 2H4c-1.103 0-2 .896-2 2v12c0 1.103.897 2 2 2h5.149l-2.774 2.219A1 1 0 0 0 7 22h10a1 1 0 0 0 .625-1.781L14.851 18H20c1.103 0 2-.897 2-2V4c0-1.104-.897-2-2-2zM9.851 20L12 18.281 14.149 20H9.851zM4 16V4h16l.001 12H4z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
