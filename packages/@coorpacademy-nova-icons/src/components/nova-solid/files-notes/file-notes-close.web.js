import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M18 2v3h-2V2h-3v3h-2V2H8v3H6V2H3v20h18V2h-3zm-2.465 14.121l-1.414 1.414L12 15.414l-2.121 2.121-1.414-1.414L10.586 14l-2.121-2.121 1.414-1.414L12 12.586l2.121-2.121 1.414 1.414L13.414 14l2.121 2.121z"
    />
  </svg>
);

export default SvgComponent;
