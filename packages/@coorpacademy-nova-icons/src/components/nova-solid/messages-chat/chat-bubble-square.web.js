import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M19.998 2h-16c-1.103 0-2 .897-2 2v12c0 1.103.896 2 2 2h2v4l5.334-4h8.666c1.104 0 2-.897 2-2V4c0-1.103-.896-2-2-2zm-13 11.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm0-4a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm11 3.75h-8v-2h8v2zm0-4h-8V7h8v2z"
    />
  </svg>
);

export default SvgComponent;
