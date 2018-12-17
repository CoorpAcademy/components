import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M3 5.999a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.963 4.963 0 0 0-.833-2.752l1.54-1.54L12.293.292l-1.54 1.54a4.972 4.972 0 0 0-5.506 0L3.707.292 2.293 1.707l1.54 1.54A4.97 4.97 0 0 0 3 5.999zM13 10.943V10h1v.521a8.933 8.933 0 0 1 2-.464V9a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v7h2v-6h1v6a1 1 0 0 0 1 1h1v3h2v-3h1.23A9.01 9.01 0 0 1 13 10.943zM17.708 12.29a1 1 0 0 0-1.414 0l-6 6 1.414 1.414L13 18.411v4.587a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4.587l1.293 1.293 1.414-1.414-5.999-6zM18 21.998h-2v-3h2v3z" />
    </g>
  </svg>
);

export default SvgComponent;
