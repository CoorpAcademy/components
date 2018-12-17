import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M1 3v16c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V3H1zm8 4l1.5-2H16l-1.5 2H9zM3 5h5L6.5 7H3V5zm18.001 14H3V9h18l.001 10zM17 7l1.5-2H21v2h-4z" />
      <path d="M9 11h2v6H9zM13 11h2v6h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
