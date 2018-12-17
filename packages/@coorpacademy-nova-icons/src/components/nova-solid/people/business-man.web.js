import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M12 5c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3h6c0 1.654-1.346 3-3 3z"
    />
    <g fill="currentColor">
      <path d="M9.08 16.36C5.988 17.162 4 19.257 4 22v2h6.777L9.08 16.36zM14.92 16.36L13.223 24H20v-2c0-2.743-1.988-4.838-5.08-5.64z" />
    </g>
    <path fill="currentColor" d="M11 19l1-3 1 3-1 4z" />
  </svg>
);

export default SvgComponent;
