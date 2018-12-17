import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M20.001 2h-16c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-8 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm0 6.25c2.301 0 3.75 1.449 3.75 3.75h-7.5c0-2.301 1.449-3.75 3.75-3.75zm-8-7.25c0-1.103.897-2 2-2h3v2h-3v3h-2V6zm5 14h-3c-1.103 0-2-.897-2-2v-3h2v3h3v2zm11-2c0 1.103-.897 2-2 2h-3v-2h3v-3h2v3zm0-9h-2V6h-3V4h3c1.103 0 2 .897 2 2v3z"
    />
  </svg>
);

export default SvgComponent;
