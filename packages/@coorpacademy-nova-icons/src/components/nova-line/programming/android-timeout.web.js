import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M3 6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.966 4.966 0 0 0-.833-2.753l1.54-1.54L12.293.293l-1.54 1.54a4.964 4.964 0 0 0-5.506 0L3.707.293 2.293 1.707l1.54 1.54A4.972 4.972 0 0 0 3 6zm5-3c1.304 0 2.416.836 2.829 2H5.172A3.002 3.002 0 0 1 8 3zM5 10h6V8H1a1 1 0 0 0-1 1v7h2v-6h1v6a1 1 0 0 0 1 1h1v3h2v-3h1v-2H5v-5zM17 9.994c-3.859 0-7 3.141-7 7 0 3.86 3.141 7 7 7 3.86 0 7-3.14 7-7s-3.14-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" />
      <path d="M18 12.994h-2v5h4v-2h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
