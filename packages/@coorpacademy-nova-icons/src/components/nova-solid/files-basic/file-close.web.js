import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 14.349V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h12.349A5.97 5.97 0 0 1 14 20a5.996 5.996 0 0 1 4-5.651zM9 15H3v-2h6v2zm3-4H3V9h9v2zm0-5V1l5 5h-5z" />
      <path d="M23.707 17.706l-1.414-1.413L20 18.586l-2.293-2.293-1.414 1.413L18.586 20l-2.293 2.293 1.414 1.413L20 21.414l2.293 2.292 1.414-1.413L21.414 20z" />
    </g>
  </svg>
);

export default SvgComponent;
