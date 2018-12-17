import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M5.998 22v-4h-2c-1.104 0-2-.897-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 1.103-.896 2-2 2h-8.666l-5.334 4zm-2-18v12h4v2l2.666-2h9.334V4h-16z"
      fill="currentColor"
    />
    <path
      d="M11.998 14s4.579-3.33 4.579-5.797c0-2.344-3.562-3.36-4.579-.284-1.018-3.076-4.579-2.06-4.579.284 0 2.467 4.579 5.797 4.579 5.797z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
