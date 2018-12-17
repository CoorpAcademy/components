import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17.998 14A7.998 7.998 0 0 1 10 6.045C4.953 6.498.998 10.341.998 15c0 1.735.541 3.392 1.572 4.836L-.002 24h11c5.514 0 10-4.037 10-9a8.05 8.05 0 0 0-.156-1.529 7.965 7.965 0 0 1-2.844.529z" />
      <path d="M17.998 0l1.714 4.286h4.286l-3.708 3.13L22.283 12l-4.285-2.834L13.712 12l1.994-4.584-3.708-3.13h4.285z" />
    </g>
  </svg>
);

export default SvgComponent;
