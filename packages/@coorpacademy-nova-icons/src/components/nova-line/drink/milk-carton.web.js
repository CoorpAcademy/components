import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M21.77 10.385l.012-.009L18 5.65V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2.65l-3.781 4.726A1.022 1.022 0 0 0 2 11v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V11a.985.985 0 0 0-.23-.615zM18.92 10h-3.84L17 7.602 18.92 10zM8 4h8v1H8V4zm-.52 3h7.439l-2.4 3H5.08l2.4-3zM4 12h8v8H4v-8zm16 8h-6v-8h6v8z" />
      <path d="M5 13h6v4H5z" />
    </g>
  </svg>
);

export default SvgComponent;
