import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 3H4c-1.103 0-2 .897-2 2v2.002h20V5c0-1.103-.896-2-2-2zM5 6a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2zM2 19c0 1.104.897 2 2 2h16a2 2 0 0 0 2-2V8.002H2V19zm10-8.411l4.707 4.707-1.414 1.414-.293-.293v2.586h-2v-3h-2v3H9v-2.586l-.293.293-1.414-1.414L12 10.589z" />
    </g>
  </svg>
);

export default SvgComponent;
