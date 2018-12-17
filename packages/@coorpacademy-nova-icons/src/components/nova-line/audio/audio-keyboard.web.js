import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M20 4h-1c0-1.104-.897-2-2-2h-2c-1.103 0-2 .896-2 2h-2c0-1.104-.897-2-2-2H7c-1.103 0-2 .896-2 2H4C2.346 4 1 5.346 1 7v11c0 1.654 1.346 3 3 3h16c1.654 0 3-1.346 3-3V7c0-1.654-1.346-3-3-3zm-5 0h2v8h-2V4zm-4 10V6h2v8h2v5H9v-5h2zM7 4h2v8H7V4zM3 18V7c0-.551.449-1 1-1h1v8h2v5H4c-.551 0-1-.448-1-1zm18 0c0 .552-.449 1-1 1h-3v-5h2V6h1c.551 0 1 .449 1 1v11z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
