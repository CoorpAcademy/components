import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <circle cx={15} cy={5} r={2} fill="currentColor" />
    <path
      d="M7.707 17.293L2.414 12l10-10H18v5l1.707 1.707A.996.996 0 0 0 20 8V1a1 1 0 0 0-1-1h-7a.996.996 0 0 0-.707.293l-11 11a.999.999 0 0 0 0 1.414l6 6 1.414-1.414z"
      fill="currentColor"
    />
    <path
      d="M17 24c-3.859 0-7-3.14-7-7 0-3.859 3.141-7 7-7s7 3.141 7 7c0 3.86-3.141 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
      fill="currentColor"
    />
    <path fill="currentColor" d="M16 17h2v4h-2z" />
    <circle cx={17} cy={15} r={1} fill="currentColor" />
  </svg>
);

export default SvgComponent;
