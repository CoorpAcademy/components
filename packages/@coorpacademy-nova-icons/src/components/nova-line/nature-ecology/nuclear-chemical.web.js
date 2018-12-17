import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24V24H0z" />
    <g fill="currentColor">
      <path d="M22 7H2v2h2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9h2V7zm-3.999 14H6V9h12l.001 12z" />
      <circle cx={12} cy={15} r={1} />
      <path d="M11.355 13.106l-.646-1.893A4.002 4.002 0 0 0 8 15h2c0-.856.544-1.617 1.355-1.894zM10.491 16.313l-1.508 1.314a4 4 0 0 0 6.008.03l-1.494-1.329c-.766.86-2.251.854-3.006-.015zM14 15h2a4.009 4.009 0 0 0-2.665-3.771l-.668 1.885A2.004 2.004 0 0 1 14 15z" />
    </g>
  </svg>
);

export default SvgComponent;
