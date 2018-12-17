import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M18.907 16c-.558 3.387-3.886 6-7.909 6H3.291l1.328-1.43a1 1 0 0 0 .021-1.338C3.566 18 2.998 16.537 2.998 15c0-2.932 2.072-5.443 5-6.484V6.415c-4.053 1.149-7 4.563-7 8.585 0 1.735.541 3.392 1.573 4.836L.265 22.32A.999.999 0 0 0 .998 24h10c5.138 0 9.379-3.507 9.935-8h-2.026z"
      fill="currentColor"
    />
    <path
      d="M16.998 14c-3.86 0-7-3.14-7-7 0-3.859 3.14-7 7-7s7 3.141 7 7c0 3.86-3.14 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
      fill="currentColor"
    />
    <path fill="currentColor" d="M15.998 7h2v4h-2z" />
    <circle cx={16.998} cy={5} r={1} fill="currentColor" />
  </svg>
);

export default SvgComponent;
