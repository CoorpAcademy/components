import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M7.293 9.3l-3.707 3.707 3.707 3.707L8.707 15.3l-2.293-2.293 2.293-2.293z"
    />
    <path
      d="M2 2.004h10v4h4V8h2V4.59L13.414.004H2c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h6v-2H2v-18z"
      fill="currentColor"
    />
    <path
      d="M17 10.004c-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7c0-3.859-3.141-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"
      fill="currentColor"
    />
    <path fill="currentColor" d="M16 17.004h2v4h-2z" />
    <circle cx={17} cy={15.004} r={1} fill="currentColor" />
  </svg>
);

export default SvgComponent;
