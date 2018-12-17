import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M18 2v3h-2V2h-3v3h-2V2H8v3H6V2H3v20h18V2h-3zm-7 15.414l-3.707-3.708 1.414-1.413L11 14.586l4.293-4.293 1.414 1.413L11 17.414z"
    />
  </svg>
);

export default SvgComponent;
