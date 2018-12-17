import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path fill="currentColor" d="M7 11.002h10v2H7z" />
    <path
      d="M19 21.002H5a2 2 0 0 1-2-2v-14a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14c0 1.103-.896 2-2 2zm-14-16v14h13.997l.003-14H5z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
