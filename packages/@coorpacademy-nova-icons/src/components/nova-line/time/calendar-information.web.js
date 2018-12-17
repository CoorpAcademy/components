import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <path
      d="M8 18H2V8h18V5c0-1.102-.897-2-2-2h-1V0h-2v5h-1V3H7V0H5v5H4V3H2C.897 3 0 3.897 0 5v13c0 1.103.897 2 2 2h6v-2z"
      fill="currentColor"
    />
    <path
      d="M17 24c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
      fill="currentColor"
    />
    <path fill="currentColor" d="M16 17h2v4h-2z" />
    <circle cx={17} cy={15} r={1} fill="currentColor" />
  </svg>
);

export default SvgComponent;
