import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <path
      fill="currentColor"
      d="M16 11.414l-3.707-3.707 1.414-1.414L16 8.586l4.293-4.293 1.414 1.414zM14 12H2c-1.104 0-2 .897-2 2v8c0 1.103.896 2 2 2h12c1.104 0 2-.897 2-2v-8c0-1.103-.896-2-2-2zm-2.12 2L8 16.771 4.12 14h7.76zM2 22v-7.057l5.419 3.87a.995.995 0 0 0 1.162 0L14 14.943 14.002 22H2z"
    />
  </svg>
);

export default SvgComponent;
