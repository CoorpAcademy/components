import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M18 2v3h-2V2h-3v3h-2V2H8v3H6V2H3v20h18V2h-3zm-2.5 16L12 15.502 8.5 18l1.5-4.002L7 12h3.5l1.507-4 1.493 4H17l-3 1.998L15.5 18z"
    />
  </svg>
);

export default SvgComponent;
