import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M18 2v3h-2V2h-3v3h-2V2H8v3H6V2H3v20h18V2h-3zm-6 16a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1-4h-2V8h2v6z"
    />
  </svg>
);

export default SvgComponent;
