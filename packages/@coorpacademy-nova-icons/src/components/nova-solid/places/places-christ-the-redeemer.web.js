import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M14 3a2 2 0 0 0-4 0v2h4V3zM9 11.94L14.939 6H3a1 1 0 0 0 0 2h1.5l.224.447A.998.998 0 0 0 5.618 9H9v2.94zM21 6h-3.94L9 14.061V20H7.333a.999.999 0 0 0-.948.684l-.333 1A1 1 0 0 0 7 23h10a1 1 0 0 0 .949-1.316l-.333-1a1.001 1.001 0 0 0-.949-.684H15V9h3.382c.379 0 .725-.214.895-.553L19.5 8H21a1 1 0 1 0 0-2z" />
    </g>
  </svg>
);

export default SvgComponent;
