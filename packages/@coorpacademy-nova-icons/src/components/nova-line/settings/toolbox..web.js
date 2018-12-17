import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M20 6.999h-3v-2c0-1.102-.897-2-2-2H9c-1.103 0-2 .898-2 2v2H4c-1.654 0-3 1.346-3 3v4h1v5c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-5h1v-4c0-1.654-1.346-3-3-3zm-11-2h6v2H9v-2zm11 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5h4c0 1.103.897 2 2 2h4c1.103 0 2-.897 2-2h4v5zm-10-5v-2h4l-.003 2H10zm11-2h-5c0-1.102-.897-2-2-2h-4c-1.103 0-2 .898-2 2H3v-2c0-.551.449-1 1-1h16c.551 0 1 .449 1 1v2z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
