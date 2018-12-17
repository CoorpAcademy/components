import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 7.002V5c0-1.103-.896-2-2-2H4c-1.103 0-2 .897-2 2v2.002h20zM8 4a1 1 0 1 1 0 2 1 1 0 1 1 0-2zM5 4a1 1 0 1 1 0 2 1 1 0 1 1 0-2zM2 8.002V19c0 1.103.897 2 2 2h16c1.104 0 2-.897 2-2V8.002H2zM8 20a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm3-1c0-1.654-1.346-3-3-3v-2c2.757 0 5 2.243 5 5h-2zm4 0c0-3.859-3.141-7-7-7v-2c4.963 0 9 4.038 9 9h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
