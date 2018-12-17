import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M3 6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.963 4.963 0 0 0-.833-2.752l1.54-1.54L12.293.294l-1.54 1.54a4.959 4.959 0 0 0-5.506-.001L3.707.293 2.293 1.708l1.54 1.54A4.963 4.963 0 0 0 3 6zm5-3c1.304 0 2.416.836 2.829 2H5.171A3.006 3.006 0 0 1 8 3zM17 9.994c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 12c-2.757 0-5-2.242-5-5 0-2.757 2.243-5 5-5s5 2.243 5 5c0 2.758-2.243 5-5 5z" />
      <path d="M16 16.994h2v4h-2z" />
      <circle cx={17} cy={15} r={1} />
      <path d="M5 10h6V8H1a1 1 0 0 0-1 1v7h2v-6h1v6a1 1 0 0 0 1 1h1v3h2v-3h1v-2H5v-5z" />
    </g>
  </svg>
);

export default SvgComponent;
