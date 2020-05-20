import * as React from "react";

const SvgComponent = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M17 11V7c0-2.757-2.244-5-5-5-2.758 0-5 2.243-5 5v4c-1.103 0-2 .896-2 2v7c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-7c0-1.104-.897-2-2-2zm-5 7a1.5 1.5 0 11.001-3.001A1.5 1.5 0 0112 18zm3-7H9V7c0-1.654 1.346-3 3-3s3 1.346 3 3v4z"
    />
  </svg>
);

export default SvgComponent;
