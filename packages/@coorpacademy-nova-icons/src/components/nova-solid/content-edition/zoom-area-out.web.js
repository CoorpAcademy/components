import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5 14a9 9 0 0 1 14-7.482V2c0-1.102-.897-2-2-2H2C.897 0 0 .898 0 2v15c0 1.103.897 2 2 2h4.518A8.952 8.952 0 0 1 5 14z" />
      <path d="M11 13h6v2h-6z" />
      <path d="M24.036 21.95l-4.159-4.159A6.962 6.962 0 0 0 21 14c0-3.86-3.14-7-7-7s-7 3.14-7 7 3.14 7 7 7a6.948 6.948 0 0 0 3.746-1.097l4.168 4.168 2.122-2.121zM9 14c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5z" />
    </g>
  </svg>
);

export default SvgComponent;
