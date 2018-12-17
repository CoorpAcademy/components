import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M16.507 10.556A4.98 4.98 0 0 0 18 7c0-2.757-2.243-5-5-5H4v2h2v16H4v2h10c3.309 0 6-2.691 6-6a6.004 6.004 0 0 0-3.493-5.444zM13 4c1.654 0 3 1.346 3 3s-1.346 3-3 3H8V4h5zm1 16H8v-8h6c2.206 0 4 1.794 4 4s-1.794 4-4 4z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
