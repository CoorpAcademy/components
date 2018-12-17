import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <path d="M21 3H3C1.346 3 0 4.346 0 6v15a1 1 0 0 0 1.6.801L5.333 19h13.333l3.733 2.8a.997.997 0 0 0 1.047.094A.996.996 0 0 0 24 21V6c0-1.654-1.346-3-3-3zM6 9h12v8H6V9zm12.586-2H5.414l-2-2h17.172l-2 2zM2 6.414l2 2V17.5L2 19V6.414zM20 17.5V8.414l2-2V19l-2-1.5z" />
      <path d="M9 10h2v2H9zM13 10h2v2h-2zM7 12h2v2H7zM11 12h2v2h-2zM15 12h2v2h-2zM9 14h2v2H9zM13 14h2v2h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
