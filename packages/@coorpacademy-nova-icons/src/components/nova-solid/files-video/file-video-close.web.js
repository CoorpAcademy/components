import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 14.351V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h12.348A5.979 5.979 0 0 1 14 20.002a5.995 5.995 0 0 1 4-5.651zM5 17V9l8 4.003L5 17zm7-11V1l5 5h-5z" />
      <path d="M23.707 17.708l-1.414-1.414L20 18.587l-2.293-2.293-1.414 1.414 2.293 2.294-2.293 2.292 1.414 1.414L20 21.415l2.293 2.293 1.414-1.414-2.293-2.292z" />
    </g>
  </svg>
);

export default SvgComponent;
