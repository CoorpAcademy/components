import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16.5 17.007H15v1h1.5a.5.5 0 0 0 0-1zM16.5 14.007H15v1h1.5a.5.5 0 0 0 0-1zM8 14.007H7v2h1a1.001 1.001 0 0 0 0-2z" />
      <path d="M16.414 1.007H5c-1.103 0-2 .896-2 2v18c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2V5.593l-4.586-4.586zm-5.414 19H8.685l-1.168-2H7v2H5v-8h3c1.654 0 3 1.346 3 3a2.99 2.99 0 0 1-1.433 2.546L11 20.007zm8-2.5c0 1.378-1.121 2.5-2.5 2.5H13v-8h3.5c1.379 0 2.5 1.121 2.5 2.5 0 .564-.195 1.081-.513 1.5.318.419.513.935.513 1.5zm-4-10.5v-5l5 5h-5z" />
    </g>
  </svg>
);

export default SvgComponent;
