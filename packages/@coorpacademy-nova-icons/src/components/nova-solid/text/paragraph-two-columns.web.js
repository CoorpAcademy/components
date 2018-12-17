import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M20 2H4c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-9 15H6v-2h5v2zm0-4H6v-2h5v2zm0-4H8V7h3v2zm5 8h-3v-2h3v2zm2-4h-5v-2h5v2zm0-4h-5V7h5v2z"
    />
  </svg>
);

export default SvgComponent;
