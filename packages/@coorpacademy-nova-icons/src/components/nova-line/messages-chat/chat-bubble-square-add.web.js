import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M2.998 24v-4h-1c-1.104 0-2-.897-2-2V9a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v9c0 1.103-.896 2-2 2H8.332l-5.334 4zm-1-15v9h3v2l2.666-2h7.334V9h-13zM20.998 3V0h-2v3h-3v2h3v3h2V5h3V3z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
