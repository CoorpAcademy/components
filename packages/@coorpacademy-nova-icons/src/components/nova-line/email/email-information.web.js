import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <g fill="currentColor">
      <path d="M14 22H2v-7.057l5.419 3.87A.995.995 0 0 0 8.6 18.8l4-3-1.2-1.6-3.415 2.561L4.12 14H9v-2H2c-1.104 0-2 .897-2 2v8c0 1.103.896 2 2 2h12c1.104 0 2-.897 2-2v-5h-2v5zM17 1c-3.859 0-7 3.141-7 7 0 3.86 3.141 7 7 7s7-3.14 7-7c0-3.859-3.141-7-7-7zm0 12c-2.757 0-5-2.242-5-5 0-2.757 2.243-5 5-5s5 2.243 5 5c0 2.758-2.243 5-5 5z" />
      <path d="M16 8h2v4h-2z" />
      <circle cx={17} cy={6} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
