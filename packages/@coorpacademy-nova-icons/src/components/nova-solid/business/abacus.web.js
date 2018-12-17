import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M20 2H4c-1.102 0-2 .897-2 2v16c0 1.103.898 2 2 2h16c1.104 0 2-.897 2-2V4c0-1.103-.896-2-2-2zm-4 5v1h-1v2h1v1h-1v2h1v7h-3v-1h1v-2h-1v-1h1v-2h-1V7h1V5h-1V4h3v1h-1v2h1zM8 17v-7h1V8H8V7h1V5H8V4h3v1h-1v2h1v7h-1v2h1v1h-1v2h1v1H8v-1h1v-2H8zM4 4h2v1H5v2h1v1H5v2h1v7H5v2h1v1H4V4zm15.997 16H18v-7h1v-2h-1v-1h1V8h-1V7h1V5h-1V4h2l-.003 16z"
    />
  </svg>
);

export default SvgComponent;
