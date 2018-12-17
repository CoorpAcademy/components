import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M9 14c-.552 0-1 .449-1 1v2a1 1 0 0 0 2 0v-2c0-.551-.448-1-1-1z" />
      <path d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zm-5.121 19.706l-1.008-1.007A2.95 2.95 0 0 1 9 20c-1.654 0-3-1.346-3-3v-2c0-1.653 1.346-3 3-3s3 1.347 3 3v2c0 .462-.113.894-.301 1.285l1.008 1.009-1.414 1.412zM18 14h-2v6h-2v-6h-2v-2h6v2zm-3-7V2l5 5h-5z" />
    </g>
  </svg>
);

export default SvgComponent;
