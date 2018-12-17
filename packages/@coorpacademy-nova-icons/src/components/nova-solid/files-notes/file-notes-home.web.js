import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M18 2v3h-2V2h-3v3h-2V2H8v3H6V2H3v20h18V2h-3zm-3 11v5h-2v-3h-2v3H9v-5H7l5-4 5 4h-2z"
    />
  </svg>
);

export default SvgComponent;
