import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11.998 13.001L11.997 13l.001-6.954c-.329-.03-.663-.046-1-.046-5.514 0-10 4.037-10 9 0 1.735.541 3.392 1.573 4.836L-.002 24h11c5.514 0 10-4.037 10-9h-7.001a2.002 2.002 0 0 1-1.999-1.999z" />
      <path d="M22.997 4c0-2.206-1.794-4-4-4s-4 1.794-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-4-2c1.102 0 2 .898 2 2h-4c0-1.102.898-2 2-2zm3 9h-6V6h6v5z" />
      <circle cx={18.997} cy={8} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
