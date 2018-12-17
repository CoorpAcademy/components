import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M2.998 24v-4h-1c-1.104 0-2-.897-2-2V9a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v9c0 1.103-.896 2-2 2H8.332l-5.334 4zm-1-15v9h3v2l2.666-2h7.334V9h-13zM20.998 9h-2V6h1a2 2 0 1 0-2-2h-2c0-2.205 1.795-4 4-4s4 1.795 4 4a4.01 4.01 0 0 1-3 3.874V9z"
      fill="currentColor"
    />
    <circle cx={19.998} cy={11} r={1} fill="currentColor" />
  </svg>
);

export default SvgComponent;
