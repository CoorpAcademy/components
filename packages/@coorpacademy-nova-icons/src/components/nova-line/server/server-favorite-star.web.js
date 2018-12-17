import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .003h24v24H0z" />
    <path fill="currentColor" d="M3 3h5v2H3zM3 9h5v2H3zM3 15h5v2H3z" />
    <circle cx={13} cy={4} r={1} fill="currentColor" />
    <circle cx={16} cy={4} r={1} fill="currentColor" />
    <circle cx={13} cy={10} r={1} fill="currentColor" />
    <circle cx={16} cy={10} r={1} fill="currentColor" />
    <path
      d="M11 18H2v-4h9v-2H2V8h15.999l-.001 3H20V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v16c0 1.103.896 2 2 2h9v-2zM2 2h16l-.001 4H2V2z"
      fill="currentColor"
    />
    <path
      fill="currentColor"
      d="M18 12l1.714 4.286H24l-3.708 3.13L22.285 24 18 21.166 13.714 24l1.994-4.584L12 16.286h4.285z"
    />
  </svg>
);

export default SvgComponent;
