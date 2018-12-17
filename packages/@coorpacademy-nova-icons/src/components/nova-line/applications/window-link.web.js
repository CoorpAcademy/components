import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 6h18v2.001L22 6V2c0-1.103-.897-2-2-2H2C.897 0 0 .896 0 2v16c0 1.103.897 2 2 2h6l2-2H2V6zm5-2V2h3v2H7zm13 0h-8V2h8v2zM5 2v2H2V2h3zM15 21.586L13.414 20l2.293-2.293-1.414-1.414-3 3a.999.999 0 0 0 0 1.414l3 3a.997.997 0 0 0 1.414 0l3-3-1.414-1.414L15 21.586zM23.707 14.292l-3-3a1 1 0 0 0-1.414 0l-3 3 1.414 1.414L20 13.414 21.586 15l-2.293 2.293 1.414 1.414 3-3a1 1 0 0 0 0-1.415z" />
      <path d="M18.293 15.292l1.414 1.414-3 3-1.414-1.414z" />
    </g>
  </svg>
);

export default SvgComponent;
