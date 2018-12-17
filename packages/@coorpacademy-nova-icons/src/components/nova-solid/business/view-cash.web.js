import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17.027 15.614A8.946 8.946 0 0 0 19 10a9 9 0 1 0-9 9 8.954 8.954 0 0 0 5.613-1.972l5.68 5.679 1.414-1.415-5.68-5.678zM10 17a7 7 0 1 1 0-14 7 7 0 0 1 0 14z" />
      <path d="M10 4.001c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zM13 8H9.5a.5.5 0 0 0 0 1h1c1.379 0 2.5 1.122 2.5 2.5 0 1.208-.86 2.218-2 2.45V15H9v-1H7v-2h3.5a.5.5 0 0 0 0-1h-1A2.503 2.503 0 0 1 7 8.5c0-1.207.86-2.217 2-2.449V5h2v1h2v2z" />
    </g>
  </svg>
);

export default SvgComponent;
