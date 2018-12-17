import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M14 16l.002 6H2v-7.057l5.419 3.87a.995.995 0 0 0 1.162 0L12 16.371V14h-.121L8 16.771 4.121 14H8v-2H2c-1.104 0-2 .897-2 2v8c0 1.103.896 2 2 2h12c1.104 0 2-.897 2-2v-6h-2zM17 14c-3.859 0-7-3.14-7-7 0-3.859 3.141-7 7-7s7 3.141 7 7c0 3.86-3.141 7-7 7zm0-12c-2.757 0-5 2.243-5 5 0 2.758 2.243 5 5 5s5-2.242 5-5c0-2.757-2.243-5-5-5z"
      fill="currentColor"
    />
    <path fill="currentColor" d="M20 8h-4V3h2v3h2z" />
  </svg>
);

export default SvgComponent;
