import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M17 10.11V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3.11A6.976 6.976 0 0 0 5 15c0 3.86 3.141 7 7 7s7-3.14 7-7a6.976 6.976 0 0 0-2-4.89zM12 18a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 18zm3-9.314C14.09 8.25 13.074 8 12 8s-2.09.25-3 .686V7c0-1.654 1.346-3 3-3s3 1.346 3 3v1.686z"
    />
  </svg>
);

export default SvgComponent;
