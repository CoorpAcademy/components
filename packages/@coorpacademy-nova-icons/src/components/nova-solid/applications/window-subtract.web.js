import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v2.002h20V2zM3 3a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2zM20 5.002H0V16c0 1.103.896 2 2 2h13.422A4.996 4.996 0 0 1 20 15V5.002zM17 19h6v2h-6z" />
    </g>
  </svg>
);

export default SvgComponent;
