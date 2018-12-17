import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24v24H0z" />
    <path
      d="M10 18H2v-2h8v-2H2V6h8l.001 7H12V2a2 2 0 0 0-2-2H2C.897 0 0 .896 0 2v16c0 1.104.897 2 2 2h8v-2zM2 2h8v2H2V2zM18 12l1.714 4.286H24l-3.708 3.13L22.285 24 18 21.166 13.714 24l1.994-4.584L12 16.286h4.285z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
