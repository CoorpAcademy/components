import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M6 4h2v2H6zM4 6h2v2H4zM6 8h2v2H6zM4 10h2v2H4z"
    />
    <path
      d="M14 2v6h2V2c0-1.104-.897-2-2-2H2C.897 0 0 .896 0 2v16c0 1.103.897 2 2 2h6v-2H2V2h2v2h2V2h8z"
      fill="currentColor"
    />
    <path
      d="M17 10c-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7-3.141-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"
      fill="currentColor"
    />
    <path fill="currentColor" d="M16 17h2v4h-2z" />
    <circle cx={17} cy={15} r={1} fill="currentColor" />
  </svg>
);

export default SvgComponent;
