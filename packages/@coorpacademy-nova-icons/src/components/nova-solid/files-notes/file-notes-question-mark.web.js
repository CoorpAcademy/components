import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M18 2v3h-2V2h-3v3h-2V2H8v3H6V2H3v20h18V2h-3zm-6 17a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1-3.127V16h-2v-2h1c1.103 0 2-.898 2-2 0-1.104-.897-2-2-2s-2 .896-2 2H8c0-2.206 1.794-4 4-4s4 1.794 4 4a4.007 4.007 0 0 1-3 3.873z"
    />
  </svg>
);

export default SvgComponent;
